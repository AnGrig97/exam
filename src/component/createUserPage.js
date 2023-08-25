import React, { useState } from 'react';

export const CreateUserPage = () => {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleCreateUser = () => {
    if (name &&  firstname && email && gender) {
    } else {
      
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname (e.target.value)}
        placeholder="firstname"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};


