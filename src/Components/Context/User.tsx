import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setAgent('Jett');
      userContext.setUser({
        name: 'vineet',
        email: 'vineet@email.com',
        age: 22,
      });
      userContext.setCar({
        name: 'Tesla',
        speed: 10,
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <br />
      <span>User Name is {userContext.user?.name}</span>
      <br />
      <span>User email is {userContext.user?.email}</span>
      <br />
      <span> Car is {userContext.car?.name}</span>
      <span> Speed is {userContext.car?.speed}</span>
      <br />
      <span>Agent is {userContext.agent}</span>
    </div>
  );
};
