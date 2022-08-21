import React from 'react';

const Login = React.lazy(() => import('views/User/Login'));
const Product = React.lazy(() => import('views/Product'));
// const Order = React.lazy(() => import('views/Orders'));
const App: React.FC = (): JSX.Element => {
  return (
    <React.Suspense>
      <Login />
      <Product />
      {/* <Order /> */}
    </React.Suspense>
  );
};

export default App;
