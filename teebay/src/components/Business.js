import React from 'react';
import { useNavigate } from 'react-router-dom';

function Business () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>All your transactions are shown below:</h1>
        
            <div>
            <button onClick={() => Navigate("/HomePage")}>Back</button>
            
            </div>
        </div>
    )
}

export default Business