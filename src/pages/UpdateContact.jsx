import React, { useState } from "react";

const UpdateContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Contact:", { name, phone });
    // later: call API PUT request here
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          placeholder="Type Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button type="submit">Save Contact</button>
    </form>
  );
};

export default UpdateContact;