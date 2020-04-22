import React, { useState } from 'react';
import './App.css';
import MemberForm from './Components/MemberForm';
import Members from './Components/Members';
// import logo from './logo.svg';


function App() {
  // Rendering members
  const [members, setMembers] = useState([
    {
      id: 0,
      name: `Nathan Nguyen`,
      role: `Back-end developer`,
      email: `n@n.com`
    },
    {
      id: 1,
      name: `Alex Cooter`,
      role: `iOS engineer`,
      email: `c@c.com`
    },
    {
      id: 2,
      name: `Ashton Ragan`,
      role: `React-I engineer`,
      email: `a@a.com`
    },
    {
      id: 3,
      name: `Corell Brown`,
      role: `React-II engineer`,
      email: `c@c.com`
    },
    {
      id: 4,
      name: `Hiter Harris`,
      role: `UI Developer`,
      email: `h@h.com`
    },
    {
      id: 5,
      name: `Prem Puttegowda`,
      role: `UX developer`,
      email: `p@p.com`
    },
    {
      id: 6,
      name: `Sandra B Coburn`,
      role: `DS engineer`,
      email: `s@s.com`
    },
    {
      id: 7,
      name: `Aaron Fuller`,
      role: `Team lead`,
      email: `a@a.com`
    }
  ]);

  const [editMember, setEditMember] = useState(false);


  // Make a function adding members
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setMembers([...members, newMember])
  }

  const edit = member => {
    const memberToEdit = {
      id: member.id,
      name: member.name,
      role: member.role,
      email: member.email
    };
    setMembers([...members, memberToEdit])
  }

  return (
    <div className='App'>
      <h1>Team builder</h1>
      <Members members={members} setEditMember={setEditMember} />
      <MemberForm addNewMember={addNewMember} editMember={editMember} setEditMember={setEditMember} edit={edit} />
    </div>
  );
}

export default App;
