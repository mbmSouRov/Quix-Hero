import React from "react";
import { useLoaderData } from "react-router-dom";
import Qustions from "../Qustions/Qustions";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  console.log(quizDetails.data.questions.length);
  return (
    <div>
      <p>This is quiz details</p>
      <div className="grid grid-cols-2 gap-10 m-10">
        {quizDetails.data.questions.map((qustion) => (
          <Qustions data={qustion} key={qustion.id}></Qustions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
