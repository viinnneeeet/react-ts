import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Action Files
import { loginUser } from 'Redux/actions/UserAction/loginAction';
import { RootStore } from 'Redux/store/store';
const Login: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = useSelector(({ login }: RootStore) => login);
  const dispatch = useDispatch();

  const loginRequest = () => {
    const loginReq = {
      email,
      password,
    };
    return dispatch(loginUser(loginReq));
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    loginRequest();
  };

  useEffect(() => {
    if (login.success) {
      setEmail('');
      setPassword('');
      localStorage.setItem(
        'accessToken',
        login.data?.accessToken ? login.data.accessToken : ''
      );
    }
  }, [login.success]);

  return (
    <div>
      <form>
        <label htmlFor="email">Enter Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          autoComplete="on"
        />
        <br />
        <label htmlFor="password">Enter Password </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          autoComplete="on"
        />
        <br />
        <input type="button" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;
