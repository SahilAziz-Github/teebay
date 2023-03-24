import React from 'react';
import { useNavigate } from 'react-router-dom';

function Rent () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>All products current rented are shown below:</h1>
        
            <div>
            <button onClick={() => Navigate("/HomePage")}>Back</button>
            
            </div>
        </div>
    )
}

export default Rent