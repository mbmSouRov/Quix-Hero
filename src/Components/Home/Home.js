import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizesDetails = useLoaderData();
  // console.log(quizes.data.length);
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 mx-10 mt-10">
        {quizesDetails.data.map((quiz) => (
          <Quiz data={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
