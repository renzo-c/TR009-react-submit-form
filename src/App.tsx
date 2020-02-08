import React from 'react';
import UserForm from './components/UserForm';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
`;

const App = () => {
  return (
    <Container>
      <UserForm />
    </Container>
  );
};

export default App;
