import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';


const hatsPage=()=>
(
  <div>
    <h1>You are at Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route component={HomePage} path='/' exact/>
      <Route component={hatsPage} path='/hats'/>
    </div>
  );
}

export default App;