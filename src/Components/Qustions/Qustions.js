import React from "react";

const Qustions = ({ data }) => {
  const { id, correctAnswer, options, question } = data;
  console.log(options);
  return (
    <div>
      <div className="border-solid border-2">
        <p>{question.slice(3, -4)}</p>
        <div>
          {options.map((option) => (
            <div className="border-solid border-2 border-black m-5 rounded-md hover:bg-cyan-400 hover:text-white cursor-pointer">
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qustions;
