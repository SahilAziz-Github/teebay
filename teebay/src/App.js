import React from "react";
import { Routes, Route  } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import HomePage from "./components/HomePage";
import Title from "./components/Title";
import Category from "./components/Category";
import Description from "./components/Description";
import Price from "./components/Price";
import Dashboard from "./components/Dashboard";
import Sell from "./components/Sell";
import Rent from "./components/Rent";
import Summary from "./components/Summary";
import Business from "./components/Business";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Registration" element={<Registration />}></Route>
      <Route path="/HomePage" element={<HomePage />}></Route>
      <Route path="/Title" element={<Title />}></Route>
      <Route path="/Category" element={<Category />}></Route>
      <Route path="/Description" element={<Description />}></Route>
      <Route path="/Price" element={<Price />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Sell" element={<Sell />}></Route>
      <Route path="/Rent" element={<Rent />}></Route>
      <Route path="/Summary" element={<Summary />}></Route>
      <Route path="/Business" element={<Business />}></Route>
      
    </Routes>
      
    
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';
import AllProductsPage from './AllProductsPage';
import SellPage from './SellPage';
import RentPage from './RentPage';
import DashboardPage from './DashboardPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/all-products" component={AllProductsPage} />
            <Route path="/sell" component={SellPage} />
            <Route path="/rent" component={Rent

              
*/ 