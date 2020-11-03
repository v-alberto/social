import React  from 'react';
import './globals.css';
import Header from './header'
import TopCards from './top-cards'
import Overview from './overview'
import Switch from'./switch.js'



function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>

      <TopCards />
      <Overview />
    </>
  );
  
}

export default App;
