import React, { useContext } from 'react'
import { useAuth } from '../../contexts/auth';
import NavBar from "../templates/navbar/NavBar";

const Dashboard: React.FC = () => {

  const {user, signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <NavBar />
      <h1>Olá, {user?.name}</h1>
    </div>
  )
}

export default Dashboard;
