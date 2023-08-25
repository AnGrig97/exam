import React from 'react';
import UserDetailsPage from './userDetailsPage';
import '../assets/styls.scss'; 
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};
const anotherUser = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane@example.com',
};
const ExampleUserDetails = () => {
  return (
    <div>
      <h1 className="user-details--user1">User Details Example</h1>
      <UserDetailsPage user={user}/>
      <h1 className="user-details--user2">Another User Details Example</h1>
      <UserDetailsPage user={anotherUser} />
    </div>
  );
};

export default ExampleUserDetails;
