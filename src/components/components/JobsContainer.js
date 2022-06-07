import React, { useEffect, useState, memo } from "react";
import "./JobsContainer.scss";

import FilterContainer from "./FilterContainer";
import { useSelector } from "react-redux";
import JobsList from "./JobsList";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const filterList = useSelector((state) => state.jobFilter.filterList)
  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
       
        entry.target.classList.toggle('show', entry.isIntersecting)
        })
      }, {
        threshold: 0.5
      });
      let entries = document.querySelectorAll(".job");
      entries.forEach((entry) => {
        observer.observe(entry)
      })
    }
  }, [jobs, filterList]);
  return (
    <div className="jobs-container">
      <div className="header"></div>
      <FilterContainer />
      <JobsList jobs={jobs}/>
    </div>
  );
};

export default memo(JobsContainer);
