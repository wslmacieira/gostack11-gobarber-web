import React from 'react';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <h1>Dashboard</h1>
      <Button onClick={() => signOut()}>Sair</Button>
    </Container>
  );
};

export default Dashboard;
