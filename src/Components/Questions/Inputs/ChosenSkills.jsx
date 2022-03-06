import React from 'react';
import { ReactComponent as Remove } from '../../assets/images/Remove.svg';

export default function ChosenSkills(props) {
  return (
    <div className="inputComponentWrapper">
      <div className="inputWraper">
        <div className="inputComponent skillComponent">
          <div className="skillContainer">
            <span>{props.skill}</span>
            <span>Years of Experience: {props.experience}</span>
          </div>
          <Remove onClick={props.removeSkill} />
        </div>
      </div>
    </div>
  );
}
