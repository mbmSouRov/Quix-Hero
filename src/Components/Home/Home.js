import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import Lottie from "lottie-react";
import animate from "../../Assests/112900-checklist.json";
const Home = () => {
  const quizesDetails = useLoaderData();
  // console.log(quizes.data.length);
  return (
    <div>
      <div className="header lg:mx-12 mx-8 flex lg:flex-row justify-between items-center flex-col">
        <div className="flex justify-end mr-10">
          <div className="flex flex-col items-start">
            <p className="text-4xl font-light text-purple-900 text-left">
              Get Your Skills Certified
            </p>
            <p className="text-left font-light">
              These practice quizes will help you with training, coaching, and
              mastery. <br />
              The old saying is true; practice makes perfect. <br />
              Practicing your skills guarantees that you will improve and become
              better and more successful.
            </p>
          </div>
        </div>
        <div>
          <div className="ml-20 lg:w-full  w-full">
            <Lottie animationData={animate} loop={true} />
          </div>
        </div>
      </div>

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
