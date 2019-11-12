import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component';

const hatsPage=()=>
(
  <div>
    <h1>You are at Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <switch>
        <Route component={HomePage} path='/' exact/>
        <Route component={ShopPage} path='/shop'/>
      </switch>
    </div>
  );
}

export default App;