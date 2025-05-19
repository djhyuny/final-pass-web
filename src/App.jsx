import React from 'react';
import { PasswordGate } from './components/PasswordGate';
import MainPage from './MainPage';

function App() {
  return (
    <PasswordGate>
      <MainPage />
    </PasswordGate>
  );
}

export default App;