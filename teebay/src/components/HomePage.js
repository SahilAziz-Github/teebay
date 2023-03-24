import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function HomePage() {

    const Navigate = useNavigate(); 

    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={() => Navigate('/Business')}>Business Summary</button>
            </li>
            <li>
              <button onClick={() => Navigate('/Sell')}>Sell</button>
            </li>
            <li>
              <button onClick={() => Navigate('/Rent')}>Rent</button>
            </li>
            <li>
              <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
            </li>
            <li>
              <button onClick={() => Navigate("/")}>Log Out</button>
            </li>
          </ul>
        </nav>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={() => Navigate('/Title')}>Add Products</button>
      </div>
    );
  }


export default HomePage;
