import React from 'react';
import { useNavigate } from 'react-router-dom';

function Category () {
    const Navigate = useNavigate();
  
    return (
        <div>
          <h1>Select Category</h1>
          <label>
            Choose a category:
            <select>
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
            </select>
          </label>
          <br />
          <button onClick={() => Navigate("/Title")}>Back</button>
          <button onClick={() => Navigate("/Description")}>Next</button>
        </div>
    )
}

export default Category