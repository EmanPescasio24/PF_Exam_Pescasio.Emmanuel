import React from 'react';


function StudentList({ students, deleteStudent }) {
  
  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h5>Student List</h5>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          {students && students.length > 0 ? (
            students.map((student) => (
              <li 
                key={student.id} 
                className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {student.name} - <strong>Grade: {student.grade}</strong>
                  </span>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted">
              No students found.
              </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;
