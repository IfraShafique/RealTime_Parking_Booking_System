import React from 'react';
import { PublicRoutes } from './pages/PublicRoutes';
import { UserRoutes } from './pages/UserRoutes';
import { AdminRoutes } from './pages/AdminRoutes';
import { BrowserRouter} from 'react-router-dom';

const App = () => {
  
  return (
    <>
   <BrowserRouter>
      {/* Wrap your routes with AuthProvider */}
      {/* <AuthProvider> */}
        <PublicRoutes />
        <UserRoutes />
        <AdminRoutes />
      {/* </AuthProvider> */}
    </BrowserRouter>
    </>
  );
}

export default App;