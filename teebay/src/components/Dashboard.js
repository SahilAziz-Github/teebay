import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>All listed products are shown below:</h1>
        
            <div>
            <button onClick={() => Navigate("/HomePage")}>Back</button>
            
            </div>
        </div>
    )
}

export default Dashboard