import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [answer, displayAnswer] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => displayAnswer(!answer)}>
          {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {answer && <p>{info}</p>}
    </div>
  );
};

export default Question;
