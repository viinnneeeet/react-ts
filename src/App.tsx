import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from 'Redux/store/store';

const Login = React.lazy(() => import('views/User/Login'));
const Product = React.lazy(() => import('views/Product'));
// const Order = React.lazy(() => import('views/Orders'));
const App: React.FC = (): JSX.Element => {
  const login = useSelector(({ login }: RootStore) => login);

  return (
    <React.Suspense>{login.success ? <Product /> : <Login />}</React.Suspense>
  );
};

export default App;
