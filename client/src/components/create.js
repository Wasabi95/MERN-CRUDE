// components/create.js
import React, { useState } from "react";

export default function Create() {  
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });

  const [message, setMessage] = useState(""); 

  const updateForm = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch("http://localhost:5050/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("User created successfully");
        setForm({ name: "", position: "", level: "" });
       
      } else {
        setMessage("Error: " + response.statusText);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            name="position"
            value={form.position}
            onChange={updateForm}
          />
        </div>
        <div className="form-group">
          <label>Level:</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="level"
              value="Intern"
              checked={form.level === "Intern"}
              onChange={updateForm}
            />
            <label className="form-check-label">Intern</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="level"
              value="Junior"
              checked={form.level === "Junior"}
              onChange={updateForm}
            />
            <label className="form-check-label">Junior</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="level"
              value="Senior"
              checked={form.level === "Senior"}
              onChange={updateForm}
            />
            <label className="form-check-label">Senior</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

							
									
									