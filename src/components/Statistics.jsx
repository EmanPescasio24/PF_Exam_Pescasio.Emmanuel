import React, { useState, useEffect } from 'react';


function Statistics({ students }) {
  const [average, setAverage] = useState(0);

   useEffect(() => {
    console.log("Statistics side-effect running...");
 
    if (students && students.length > 0) {
      const total = students.reduce((sum, s) => sum + Number(s.grade), 0);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAverage(total / students.length);
    } else {
      setAverage(0);
    }
  }, [students]); // Missing 'students' dependency! HINT: This array should contain variables that trigger the effect.

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
