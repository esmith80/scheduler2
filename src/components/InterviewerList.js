import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

function InterviewerList({interviewers, value, onChange}) {

  const interviewerListItems = interviewers.map( i => {
    return (
      <InterviewerListItem 
        key={i.id}
        name={i.name}
        avatar={i.avatar}
        selected={i.id === value}
        setInterviewerID={() => onChange(i.id)}    
      />)
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListItems}</ul>
    </section>
  );
}

export default InterviewerList;