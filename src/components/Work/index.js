import React from 'react';
import WorkItem from './WorkItem';

const Work = ({work}) => {
  console.log(work);
  return (
    <div className='parallax'>
      {work.map((job, i) => 
          <WorkItem 
            key={i}
            job={job}
            />)}
    </div>
  )
}

export default Work;