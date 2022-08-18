import React, { useState } from 'react';

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
    </div>
  );
};

export default LoggedIn;
