import React from "react";
import JOB_DATA from "../assets/job-directory-data.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Job = () => {
  const params = useParams();
  //write function to console job based on id

  const FILTERED_DATA = JOB_DATA.find((element) => {
    return element.id === parseInt(params?.id);
  });

  console.log(FILTERED_DATA);
  return (
    <div>
      <Header />
      <h1>Job</h1>
      <p>Job id - {params?.id || "Invalid id"}</p>
      <pre>{JSON.stringify(FILTERED_DATA, null, 4)}</pre>
    </div>
  );
};

export default Job;
