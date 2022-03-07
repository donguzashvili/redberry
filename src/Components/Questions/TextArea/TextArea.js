import { useState } from 'react';
import './TextArea.css';

export default function TextArea({ name, question, placeholder, height, width }) {
  const [data, setData] = useState();
  if (data) localStorage.setItem(name, data);

  return (
    <div className="textArea">
      <div className="textAreaWrapper">
        <h4>{question}</h4>
        <div className="textAreaInput">
          <textarea
            onInput={(e) => setData(e.currentTarget.value)}
            style={{ height: `${height}px`, width: `${width}px` }}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
