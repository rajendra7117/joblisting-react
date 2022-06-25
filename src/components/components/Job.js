import React from "react";
import "./Job.scss";
import Categories from "./Categories";
import JobDetails from "./JobDetails";

const Job = ({ job }) => {
  return (
    <div className={`job ${job.featured ? "featured" : ""}`} data-testId="job">
      <div className="img-container">
        <img src={job.logo} alt="logo" />
      </div>

      <JobDetails jobDetails={job} />
      <Categories categories={[job.role, job.level, ...job.languages]} />
    </div>
  );
};

export default Job;
