import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/MyValue/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(e.currentTarget.elements.login.value));
    console.log(e.currentTarget.elements.login.value);
    e.currentTarget.reset();
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LoginForm;
