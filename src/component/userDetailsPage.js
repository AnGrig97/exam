import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import '../assets/styls.scss';

export const UserDetailsPage = ({ user }) => {
  const { register, handleSubmit } = useForm();
  const handleUpdate = (data) => {
    console.log(data);
  };
  const handleDelete = () => {
    console.log('Deleted');
  };
  const initialValues = useMemo(() => {
    return {
      name: user.name,
      email: user.email,
    };
  }, [user.name, user.email]);
  return (
    <div className="user-details-page">
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input
          type="text"
          name="name"
          ref={register}
          defaultValue={initialValues.name}
        />
        <input
          type="email"
          name="email"
          ref={register}
          defaultValue={initialValues.email}
        />
        <button type="submit">Update</button>
      </form>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

UserDetailsPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
