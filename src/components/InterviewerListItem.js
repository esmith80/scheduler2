import React from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

export default function InterviewerListItem (props) {
  const classes = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
    return (
      <li className={classes} onClick={props.setInterviewerID}>
        <img
          className="interviewers__item-image"
          src={props.avatar}
          alt={props.name}
          selected={props.selected}           
        />
        {props.selected && props.name}
      </li>
    );
  }