import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/MyValue/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.login);

  return (
    <>
      <div>
        <p>Welcome, {userName}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
