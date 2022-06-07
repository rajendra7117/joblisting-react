import React, {useEffect, useState, memo} from 'react'
import Job from './Job'
import useFilter from '../../hooks/UseFilter'
import { useSelector } from 'react-redux'
const JobsList = ({jobs}) => {
    const filterList = useSelector((state) => state.jobFilter.filterList)
    
   
   let jobsList = jobs.map((job) => {
       return {...job, filterList:[job.role, job.level, ...job.languages]}
   })
 
  
   const {filteredList: filteredList} = useFilter(filterList, jobsList)
  

  return (
    <div className="jobs-list">
       
   {filterList?.length>0 ?filteredList.map((job) => (
      <Job key={job.id} id={job.id} job={job} />
    )): jobsList.map((job) => (
        <Job key={job.id} id={job.id} job={job} />
      ))}
  </div>
  )
}

export default memo(JobsList)