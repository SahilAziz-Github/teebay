import React from 'react';
import { useNavigate } from 'react-router-dom';

function Summary () {
    const Navigate = useNavigate();
  
    return (
      <div>
        <h1>Title of product</h1>
        <input
          type="text"
          name="title"
          placeholder="Enter title of the product"
        />
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
          <h1>Description of the product</h1>
        <input
          type="text"
          name="description"
          placeholder="Enter description of the product"
        />
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
            <div>
            <button onClick={() => Navigate("/Price")}>Back</button>
            <button onClick={() => Navigate("/HomePage")}>Add product</button>
            </div>
        </div>
    )
}

export default Summary 