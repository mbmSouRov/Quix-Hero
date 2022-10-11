import React from "react";
import { useLoaderData } from "react-router-dom";
import Qustions from "../Qustions/Qustions";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  // console.log(quizDetails.data.name);
  return (
    <div className="mt-10">
      <p className="text-4xl font-light">
        Start Taking{" "}
        <span className="text-purple-700 font-semibold">
          {quizDetails.data.name}
        </span>{" "}
        Quiz
      </p>
      <div className="grid grid-cols-2 gap-10 m-10">
        {quizDetails.data.questions.map((qustion) => (
          <Qustions data={qustion} key={qustion.id}></Qustions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
