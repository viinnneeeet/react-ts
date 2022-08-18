import React, { useState } from 'react';

type AuthUser = {
  userName: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogIn = () => {
    setUser({ userName: 'abc', email: 'abc@abc.com' });
  };
  const handleLogOut = () => {
    setUser({ userName: '', email: '' });
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User is {user?.userName} </div>
      <div>USer email is {user?.email}</div>
    </div>
  );
};

export default User;
