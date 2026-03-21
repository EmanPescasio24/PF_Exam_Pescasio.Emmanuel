import React, { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !grade){
      alert("Please enter both name and grade");
    return;
  };

  const newStudent = {
    id: Date.now(),
    name: name,
    grade: Number(grade)
  };

  onAdd(newStudent);
  setName('');
  setGrade('');
  
    
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
