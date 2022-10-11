import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
const Statistics = () => {
  const data = useLoaderData();

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl">Box Chart</h1>
      <p className="font-light">X-axis = Name of Quizes</p>
      <p className="font-light mb-5">Y-axis = No of Quizes</p>
      <BarChart width={600} height={300} data={data.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="total" barSize={30} fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Statistics;
