import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route path = '/shop' component = { ShopPage }></Route>
        <Route path = '/signin' component = { SignInAndSignUpPage }></Route>
      </Switch>
    </div>
  );
}

export default App;
