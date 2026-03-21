import React, { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !grade) return;

    /**
     * TODO: COMPLETE THE LOGIC
     * 1. Create a student object with:
     *    - id (use Date.now() for simplicity)
     *    - name
     *    - grade (converted to number)
     * 2. Call the 'onAdd' function passed via props.
     * 3. Clear the input fields.
     * 
     * HINT: Use setName('') and setGrade('') to clear the text boxes after you've added the student!
     */

    // Student Logic goes here...
    console.log("Add button clicked, but logic is missing!");
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        <h5>Add New Student</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-success w-100">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentForm;
