import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizesDetails = useLoaderData();
  // console.log(quizes.data.length);
  return (
    <div>
      <div className="header"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-10 mx-5 mt-10">
        {quizesDetails.data.map((quiz) => (
          <Quiz data={quiz} key={quiz.id}>
            {console.log(quiz.id)}
          </Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
