import React from 'react';
import { useNavigate } from 'react-router-dom';

function Description () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>Description of the product</h1>
        <input
          type="text"
          name="description"
          placeholder="Enter description of the product"
        />
            <div>
            <button onClick={() => Navigate("/Category")}>Back</button>
            <button onClick={() => Navigate("/Price")}>Next</button>
            </div>
        </div>
    )
}

export default Description