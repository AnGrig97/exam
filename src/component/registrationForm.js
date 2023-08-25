import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styls.scss';

export const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <input type="text" name="name" ref={register} placeholder="Name" />
        <input type="email" name="email" ref={register} placeholder="Email" />
        <input type="password" name="password" ref={register} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};




