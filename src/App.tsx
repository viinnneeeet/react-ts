import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from 'Redux/store/store';
const Login = React.lazy(() => import('views/User/Login'));
const Product = React.lazy(() => import('views/Orders'));
const App: React.FC = (): JSX.Element => {
  const login = useSelector(({ login }: RootStore) => login);
  useEffect(() => {
    if (login.success) {
      localStorage.setItem(
        'accessToken',
        login.data?.accessToken ? login.data.accessToken : ''
      );
    }
    if (login.failed) {
      localStorage.setItem('accessToken', '');
    }
  }, [login.success, login.failed]);
  console.log(login.success, 'succ');
  return (
    <React.Suspense>
      <div className="app">
        <Login />
        {login.success && <Product />}
      </div>
    </React.Suspense>
  );
};

export default App;
