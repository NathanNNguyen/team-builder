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
    },
    {
      id: 1,
      name: `Alex Cooter`,
    },
    {
      id: 2,
      name: `Ashton Ragan`,
    },
    {
      id: 3,
      name: `Corell Brown`,
    },
    {
      id: 4,
      name: `Hiter Harris`,
    },
    {
      id: 5,
      name: `Prem Puttegowda`,
    },
    {
      id: 6,
      name: `Sandra B Coburn`,
    },
    {
      id: 7,
      name: `Aaron Fuller`,
    }
  ]);

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

  return (
    <div className="App">
      My team
      <Members members={members} />
      <MemberForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
