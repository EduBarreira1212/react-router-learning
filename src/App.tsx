import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <Div>
      <NavBar/>
      <Outlet/>
    </Div>
  );
}

export default App;
