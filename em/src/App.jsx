import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import Statistics from './components/Statistics';

/**
 * CYBER-DOJO GRADE TRACKER
 * 
 * CHALLENGES:
 * 1. App.jsx: The 'addStudent' function has a state mutation bug.
 * 2. App.jsx: The 'StudentList' prop name doesn't match the child's expectations.
 * 3. AddStudentForm.jsx: The submission logic is missing.
 * 4. Statistics.jsx: The average doesn't update when students are added/deleted.
 */

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', grade: 85 },
    { id: 2, name: 'Jane Smith', grade: 92 },
  ]);

  const addStudent = (newStudent) => {
    /**
     * BUG ALERT: State Mutation
     * Fix this logic so React knows the state has changed and triggers a re-render.
     * HINT: Look up the "spread operator" (...) to create a copy of the array!
     */
    const updatedList = students;
    updatedList.push(newStudent);
    alert(`Student ${newStudent.name} added (supposedly)!`);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-3 fw-bold text-primary">Cyber-Dojo Grade Tracker</h1>
        <p className="lead">Test your React skills by fixing this broken application!</p>
      </header>

      <TaskBoard />

      <div className="row mt-5">
        <div className="col-md-7">
          <StudentList students={students} deleteStudent={deleteStudent} />
        </div>
        <div className="col-md-5">
          <Statistics students={students} />
          <AddStudentForm onAdd={addStudent} />
        </div>
      </div>

      <footer className="text-center mt-5 text-muted border-top pt-3">
        &copy; 2026 Cyber-Dojo Training Ground
      </footer>
    </div>
  );
}

export default App;
