import React, { useState } from 'react';

const MemberForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleChanges = e => {
    // We can use push method to push the new member into the array but that would mutate the array directly
    // Instead we are using the spread operator so the array won't get mutated and we still be able to add new member into it

    setMember({ ...member, [e.target.id]: e.target.value });
    // console.log(e.target.value);
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