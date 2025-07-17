import React from 'react'
import { useState } from 'react';
import './App.css'
export default function SearchBox() {
    const [city, setEmail] = useState("");

    return (
      <div className="wrapper">
        <div className={`custom-textfield ${city ? "filled" : ""}`}>
          <input
            type="email"
            id="email"
            value={city}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">city</label>
        </div>
      </div>
    );
}

