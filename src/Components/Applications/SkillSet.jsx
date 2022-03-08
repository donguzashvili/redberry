import React from 'react';

const SkillSet = ({ data }) => {
  return (
    <div className="skillSet applicationGrid">
      <h6>Skillset</h6>
      <div className="fieldWrapper">
        {data.map((item, index) => {
          const language = JSON.parse(sessionStorage.getItem('skills')).find((el) => el.id === item.id);
          return (
            <React.Fragment key={index}>
              <span>{language.title}</span>
              <p>Years of Experience: {item.experience}</p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSet;
