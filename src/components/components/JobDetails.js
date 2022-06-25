import React from 'react'

const JobDetails = ({jobDetails}) => {
  return (
    <div className='job-details' >
        <div className='sec-1'>
            <span>{jobDetails.company}</span>
            {jobDetails.new && (<span>New</span>)}
            {jobDetails.featured && (<span>Featured</span>)}
            
        </div>
        <div className='sec-2'>
            <h1>{jobDetails.position}</h1>
        </div>
        <div className='sec-3'>
            <span>{jobDetails.postedAt}</span>
            <span> {jobDetails.contract}</span>
            <span>{jobDetails.location}</span>
        </div>
    </div>
  )
}

export default JobDetails