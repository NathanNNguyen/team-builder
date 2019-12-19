import React from 'react';

const Members = props => {
  return (
    <div className='member-list'>
      {props.members.map(member => (
        <div className='member' key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;