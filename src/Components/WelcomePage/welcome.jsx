import React from "react";
import { ReactComponent as RocketMan } from "../assets/images/rocketman.svg";
import { useNavigate } from "react-router-dom";

import "./welcome.css";

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pushLink = (link) => {
    const navigate = useNavigate();
    navigate(`/${link}`);
  };

  render() {
    return (
      <div className="welcome">
        <div className="welcomeWrapper">
          <div className="welcomeContent">
            <h1>Welcome Rocketeer !</h1>

            <button>Start Questionnaire</button>
            <a onClick={() => this.pushLink("submitedApps")}>
              Submitted Applications
            </a>

            <RocketMan />
          </div>
        </div>
      </div>
    );
  }
}
