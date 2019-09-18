import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';
import Form from './Form';
import { teamMembersList } from './Data';

const initialTeamMemberForm = {
  name: '',
  role: '',
  email: '',
};

function App() {

  const [teamList, setTeamList] = useState(teamMembersList);
  const [newMemberForm, setNewMemberForm] = useState(initialTeamMemberForm);

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewMemberForm({
      name: e.target.value,
      role: newMemberForm.role,
      email: newMemberForm.email,
    });
  };

  const onRoleChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewMemberForm({
      name: newMemberForm.name,
      role: e.target.value,
      email: newMemberForm.email,
    });
  };

  const onEmailChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewMemberForm({
      name: newMemberForm.name,
      role: newMemberForm.role,
      email: e.target.value,
    });
  };

 

  // const handleChange = event => {
  //   setTeamList({...teamMembersList, [event.target.name]: event.target.value});
  // };

  const handleSubmit = event => {
    event.preventDefault();

    const newTeamMember = {
      id: uuid(),
      name: newMemberForm.name,
      role: newMemberForm.role,
      email: newMemberForm.email,
    };
    const newTeamMemberList = teamList.concat(newTeamMember);
    setTeamList(newTeamMemberList);
    setNewMemberForm(initialTeamMemberForm);
  }

  return (
    <div className="App">
        <Form 
          onnamechange={onNameChange}
          onrolechange={onRoleChange}
          onemailchange={onEmailChange}
          // handlechange={handleChange}
          handlesubmit={handleSubmit}
          newmemberform={newMemberForm}
          teamlist={teamList}
        />
        <div className="devs">
        {
          teamList.map((info) => (
            <div className="team-member" key={info.id}>
              <h1 >{info.name}</h1>
              <h2>{info.role}</h2> <h3>Email: {info.email}</h3>
            </div>
          ))
        }
        </div>  
    </div>
  );
}

export default App;
