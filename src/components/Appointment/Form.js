import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

const Form = (props) => {
  const [studentName, setStudentName] = useState(props.studentName || "");
  const [interviewerID, setInterviewerID] = useState(props.interviewerID || null);

const reset =() => {
  setStudentName("");
  setInterviewerID(null);
}

const cancel = () => {
  reset();
  // props.onCancel();

}

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name" // <= don't get this name confused with student name! 
            type="text"
            placeholder="Enter Student Name"
           
            //This needs to be set up as a controlled component
            value={studentName}
            onChange={event => setStudentName(event.target.value)} // here, we have an actual onChange event why does this need to be a callback?

          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewerID}
          onChange={setInterviewerID} // here, we're passing down a function, no event necessary
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;