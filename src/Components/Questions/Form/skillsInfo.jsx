import React from 'react';

import Input from '../Inputs/Input';
import ChosenSkills from '../Inputs/ChosenSkills';
import Select from '../Selects/Select';

import { url, token } from '../GlobalVariables';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.selectSkill = React.createRef();

    this.state = {
      skills: null,
      selectedSkill: null,
      userSkills: localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userSkills !== prevState.userSkills) {
      localStorage.setItem('skills', JSON.stringify(this.state.userSkills));
    }
  }

  fetchData = async () => {
    try {
      const Url = `${url}/skills`;

      const headers = new Headers();
      headers.append('token', `${token}`);

      const reqOptions = {
        method: 'GET',
        headers: headers,
      };
      const data = await fetch(Url, reqOptions);
      const skills = await data.json();
      this.setState({ skills });
    } catch (err) {
      console.log(err);
    }
  };

  updateSkillList = () => {
    const uniqueSkill = this.state.userSkills.some((el) => el.title === this.selectSkill.title);

    if (this.selectSkill.id.length === 0) return this.props.sendError('გთხოვთ აირჩიოთ რომელიმე ენა!');

    if (uniqueSkill) {
      return this.props.sendError(`${this.selectSkill.title} უკვე არსებობს სიაში! გთხოვთ დაამატოთ სხვა ენა`);
    }

    const experience = document.getElementsByName('experience')[0].value;
    const newSkill = { ...this.selectSkill, experience };
    this.setState({ userSkills: [...this.state.userSkills, newSkill] });
  };

  removeSkill = (id) => {
    let newArr = [];
    this.state.userSkills.forEach((el) => (el.id !== id ? newArr.push(el) : null));
    this.setState({ userSkills: newArr });
  };

  render() {
    return (
      <div className="DynamicForm">
        <h3>Tell us about your skills</h3>
        <div className="fieldsWrapper">
          <Select
            name="id"
            placeholder="Skills"
            options={this.state.skills}
            value={(skill) => (this.selectSkill = skill)}
          />

          <Input
            name="experience"
            type="text"
            placeholder="Experience Duration in Years"
            validate={this.props.validate}
            error="მიუთითეთ დროის ხანგრძლივობა!"
          />

          <div className="skillBtnWrapper">
            <button type="button" onClick={this.updateSkillList} className="addSkill">
              Add Programming Language
            </button>
          </div>

          {this.state.userSkills
            ? this.state.userSkills.map((item) => {
                return (
                  <ChosenSkills
                    key={item.id}
                    skill={item.title}
                    experience={item.experience}
                    removeSkill={() => this.removeSkill(item.id)}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
