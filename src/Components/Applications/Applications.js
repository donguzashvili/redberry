import React from 'react';
import { url, token } from '../Questions/GlobalVariables';
import ApplicaitonForm from './applicationForm';

import './applications.css';

export default class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchApplicaitons();
  }

  fetchApplicaitons = async () => {
    const URL = `${url}/applications?token=${token}`;

    const response = await fetch(URL, {
      method: 'GET',
    });
    const data = await response.json();

    this.setState({ data });
  };

  render() {
    return (
      <div className="applications">
        <div className="applicationsWrapper">
          <h2>Submitted Applications</h2>
          {this.state.data
            ? this.state.data.map((item, index) => {
                return <ApplicaitonForm key={index} index={index + 1} data={item} />;
              })
            : null}
        </div>
      </div>
    );
  }
}
