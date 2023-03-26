import React from 'react';
import { useNavigate } from 'react-router-dom';

function Price () {
    const Navigate = useNavigate();
  
    return (
        <div>
          <h1>Selling Price of the product</h1>
            <input
            type="text"
            name="Price"
            placeholder="Enter selling price of the product"
            />
          <h1>Select renting price of the product</h1>
          <input
            type="text"
            name="Price"
            placeholder="Enter renting price of the product"
            />
          <label>
            Choose a category:
            <select>
              <option value="">Select Duration</option>
              <option value="byHour">Hourly</option>
              <option value="byDay">Daily</option>
            </select>
          </label>
          <br />
          <button onClick={() => Navigate("/Description")}>Back</button>
          <button onClick={() => Navigate("/Summary")}>Next</button>
        </div>
    )
}

export default Price
