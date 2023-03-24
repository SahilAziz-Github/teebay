import React from 'react';
import { useNavigate } from 'react-router-dom';

function Title () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>Title of product</h1>
        <input
          type="text"
          name="title"
          placeholder="Enter title of the product"
        />
            <div>
            <button onClick={() => Navigate("/HomePage")}>Back</button>
            <button onClick={() => Navigate("/Category")}>Next</button>
            </div>
        </div>
    )
}

export default Title