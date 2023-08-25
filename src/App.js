import React from 'react';
import './App.css';
import { CreateUserPage } from './component/createUserPage';
import { LoginForm } from './component/loginForm';
import { RegistrationForm } from './component/registrationForm';
import  UserDetailsPage from './component/userDetailsPage';
import { UsersPage } from './component/usersPage';
import ExampleUserDetails from './component/exampleUserDetails';
import { ExampleCreateUser } from './component/exampleCreateUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {}
      <CreateUserPage/>
      <LoginForm/>
      <RegistrationForm/>
      <UserDetailsPage/>
      <UsersPage/>
      <ExampleUserDetails/>
      <ExampleCreateUser/>
      <Router>
        <Routes>
          <Route path={'/'} element={<LoginForm />} />
          <Route path={'/userPage'} element={<UsersPage />} />
          <Route path={'/registrationForm'} element={<RegistrationForm />} />
          <Route path={'*'} element={<div><h1>404</h1></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
