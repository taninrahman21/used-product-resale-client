import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const DashboardHome = () => {
  const {user} = useContext(AuthContext);


  return (
    <div>
      <h1>DashBoard</h1>
    </div>
  );
};

export default DashboardHome;