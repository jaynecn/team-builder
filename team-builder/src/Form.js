import React, {useState} from 'react';
import { teamMembersList } from './Data';

function Form (props) {
  console.log(props);
  // const [handleSubmit, handleChange, teamList] = props;
  return (
    <div className="form">
      <h1>Team Members</h1>
      <form onSubmit={event => props.handlesubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.newmemberform.name}
            onChange={event => props.onnamechange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={props.newmemberform.role}
            onChange={event => props.onrolechange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={props.newmemberform.email}
            onChange={event => props.onemailchange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  )
}

export default Form;