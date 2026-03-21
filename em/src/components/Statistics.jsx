import React, { useState, useEffect } from 'react';

/**
 * BUG ALERT: useEffect Dependency
 * This component should update the average whenever the 'students' list changes.
 * Task: Add 'students' to the dependency array.
 */
function Statistics({ students }) {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    console.log("Statistics side-effect running...");
    if (students && students.length > 0) {
      const total = students.reduce((sum, s) => sum + Number(s.grade), 0);
      setAverage((total / students.length).toFixed(2));
    } else {
      setAverage(0);
    }
  }, []); // Missing 'students' dependency! HINT: This array should contain variables that trigger the effect.

  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark text-center">
        <h4>Class Statistics</h4>
      </div>
      <div className="card-body text-center">
        <h2 className="display-4">{average}</h2>
        <p className="text-muted">Average Class Grade</p>
      </div>
    </div>
  );
}

export default Statistics;
