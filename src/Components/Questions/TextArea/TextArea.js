import { useState } from 'react';
import './TextArea.css';

export default function TextArea({ name, question, placeholder, height, width, defaultValue }) {
  const [data, setData] = useState();
  if (data) localStorage.setItem(name, data);
  const localStorageVal = localStorage.getItem(name) ? localStorage.getItem(name) : '';

  return (
    <div className="textArea">
      <div className="textAreaWrapper">
        <h4>{question}</h4>
        <div className="textAreaInput">
          <textarea
            onInput={(e) => setData(e.currentTarget.value)}
            style={{ height: `${height}px`, width: `${width}px` }}
            placeholder={placeholder}
            defaultValue={defaultValue ? defaultValue : localStorageVal}
            disabled={defaultValue}
          />
        </div>
      </div>
    </div>
  );
}
