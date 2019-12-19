import React, { useState } from "react";

const MemberForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.id]: e.target.value });
    console.log(e.target.value);
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member)
  }

  return (
    <form onSubmit={submitForm}>
      <label>Name </label>
      <input id='name' name='name' type='text' placeholder='name' value={member.name} onChange={handleChanges} />

      <label htmlFor="role"> Role </label>
      <input id="role" name='role' type='text' placeholder='role' value={member.role} onChange={handleChanges} />

      <label htmlFor="email"> Email </label>
      <input id="email" name='email' type='email' placeholder='email' value={member.email} onChange={handleChanges} />

      <button> Add member </button>
    </form>
  )
}

export default MemberForm;