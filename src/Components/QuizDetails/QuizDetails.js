import React from "react";
import { useLoaderData } from "react-router-dom";
import Qustions from "../Qustions/Qustions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const matchAnswer = (selectedOption, RightAnswer) => {
    if (selectedOption === RightAnswer) {
      toast.success("Right Answer", { position: toast.POSITION.TOP_CENTER });
    } else {
      toast.error("Wrong Answer! Try Again", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

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
          <Qustions
            data={qustion}
            key={qustion.id}
            matchAnswer={matchAnswer}
          ></Qustions>
        ))}
        <ToastContainer />;
      </div>
    </div>
  );
};

export default QuizDetails;
