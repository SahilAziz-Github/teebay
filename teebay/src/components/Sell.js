import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sell () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>All sold products are shown below:</h1>
        
            <div>
            <button onClick={() => Navigate("/HomePage")}>Back</button>
            
            </div>
        </div>
    )
}

export default Sell