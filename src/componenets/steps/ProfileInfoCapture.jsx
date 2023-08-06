import React, { useState } from "react";

const ProfileInfoCapture = ({ request, setRequest }) => {
  return (
    <div className="container space-y-2">
      <h2 className="form_desc">
        Please enter email and newsletter preferences:
      </h2>
      <div>
        <label htmlFor="email" className="form_label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={request.email}
          onChange={(e) =>
            setRequest((prevRequest) => ({
              ...prevRequest,
              email: e.target.value,
            }))
          }
          className="form_input"
          required
        />
      </div>
      <div>
        <label htmlFor="newsletter" className="form_label">
          Newsletter Preference
        </label>
        <select
          id="newsletter"
          value={request.newsletter}
          onChange={(e) =>
            setRequest((prevRequest) => ({
              ...prevRequest,
              newsletter: e.target.value,
            }))
          }
          className="form_input"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
};

export default ProfileInfoCapture;
