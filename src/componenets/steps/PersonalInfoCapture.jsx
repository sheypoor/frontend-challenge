import React, { useState } from "react";

const PersonalInfoCapture = ({ request, setRequest }) => {
  return (
    <div className="container space-y-2">
      <h2 className="form_desc">Please enter your name and age:</h2>
      <div>
        <label htmlFor="name" className="form_label">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={request.name}
          onChange={(e) =>
            setRequest((prevRequest) => ({
              ...prevRequest,
              name: e.target.value,
            }))
          }
          className="form_input"
          required
        />
      </div>
      <div>
        <label htmlFor="age" className="form_label">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={request.age}
          onChange={(e) =>
            setRequest((prevRequest) => ({
              ...prevRequest,
              age: e.target.value,
            }))
          }
          className="form_input"
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfoCapture;
