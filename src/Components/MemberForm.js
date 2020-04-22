import React, { useState, useEffect } from 'react';

const MemberForm = ({ setMembers, members, addNewMember, editMember, setEditMember }) => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleChanges = e => {
    // We can use push method to push the new member into the array but that would mutate the array directly
    // Instead we are using the spread operator so the array won't get mutated and we still be able to add new member into it

    setMember({ ...member, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  }

  useEffect(() => {
    setMember(editMember)
  }, [editMember]);

  const submitForm = e => {
    e.preventDefault();
    addNewMember(member)
  }

  const [memberToEdit, setMemberToEdit] = useState(null);

  const edit = e => {
    e.preventDefault();
    if (editMember) {
      members[memberToEdit] = {
        name: member.name,
        email: member.email,
        role: member.role
      }
      console.log(members[memberToEdit])
      setMembers([...members])
      setMember({
        name: '',
        role: '',
        email: '',
      })
      setEditMember(false)
    }
  }


  return (
    <form >
      <label>Name </label>
      <input id='name' name='name' type='text' placeholder='name' value={member.name} onChange={handleChanges} />

      <label htmlFor="role"> Role </label>
      <input id="role" name='role' type='text' placeholder='role' value={member.role} onChange={handleChanges} />

      <label htmlFor="email"> Email </label>
      <input id="email" name='email' type='email' placeholder='email' value={member.email} onChange={handleChanges} />

      <button onClick={submitForm}> Add member </button>
      <button onClick={edit} >Edit</button>
    </form>
  )
}

export default MemberForm;