import React, { useState, useEffect } from 'react';
import { ReactComponent as Vector } from '../../assets/images/Vector.svg';

import './select.css';

export default function Select(props) {
  const [optionsContainer, setOptionsContainer] = useState(false);
  const [chosenVal, setChosenVal] = useState({ id: '', title: '' });

  useEffect(() => {
    //if user chooses skill this will close container && will store in parents Ref
    setOptionsContainer(false);
    props.value(chosenVal);
  }, [chosenVal]);

  return (
    <div className="select">
      <div className="selectWrapper">
        <div onClick={() => setOptionsContainer(!optionsContainer)} className="chosenContent">
          <input disabled name={props.name} value={chosenVal.title} type="text" placeholder={props.placeholder} />
          <Vector />
        </div>
        <div className={optionsContainer ? 'options openOptions' : 'options'}>
          {props.options
            ? props.options.map((item) => {
                return (
                  <span onClick={() => setChosenVal({ id: item.id, title: item.title })} key={item.id}>
                    {item.title}
                  </span>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
