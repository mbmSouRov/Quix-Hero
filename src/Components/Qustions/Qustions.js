import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Alert } from "flowbite-react";
const Qustions = ({ data }) => {
  const { id, correctAnswer, options, question } = data;
  const [active, setActive] = useState(true);
  const seeAnswer = (value) => {
    setActive(!value);
  };
  console.log(active);
  let icon1, icon2;
  icon1 = (
    <EyeIcon
      onClick={() => {
        seeAnswer(true);
      }}
      className="h-6 w-6"
    ></EyeIcon>
  );
  icon2 = (
    <EyeSlashIcon
      onClick={() => {
        seeAnswer(false);
      }}
      className="h-6 w-6"
    ></EyeSlashIcon>
  );

  return (
    <div>
      <div className="border-solid border-black border-2 rounded-md p-3 shadow-lg bg-purple-100">
        <p className="text-xl text-left flex items-center justify-between">
          <span>{question.slice(3, -4)}</span>
          {active ? icon1 : icon2}
        </p>
        <div>
          {options.map((option) => (
            <div className="border-solid border-2 border-black m-5 rounded-md hover:bg-purple-800 hover:text-white cursor-pointer">
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Ans Show */}
      <div className={active ? "hidden" : "w-100"}>
        <Alert>
          <p>Corrent Ans: {correctAnswer}</p>
        </Alert>
      </div>
    </div>
  );
};

export default Qustions;
