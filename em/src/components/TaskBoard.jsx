import React from 'react';

const TaskBoard = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1: Prop Mismatch",
      desc: "The StudentList is not showing data. Fix the prop naming mismatch between App.jsx and StudentList.jsx.",
      status: "⚠️ Broken"
    },
    {
      id: 2,
      title: "Task 2: State Mutation",
      desc: "The 'add' function mutates the state array directly. Fix it using the spread operator to trigger a re-render.",
      status: "⚠️ Buggy"
    },
    {
      id: 3,
      title: "Task 3: Missing Logic",
      desc: "The AddStudentForm is just a shell. Implement the handleSubmit logic to create and add a new student.",
      status: "⚠️ Incomplete"
    },
    {
      id: 4,
      title: "Task 4: Hook Dependency",
      desc: "The Statistics average doesn't update. Add the missing dependency to the useEffect hook.",
      status: "⚠️ Static"
    }
  ];

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">📋 Assessment Tasks</h5>
        <span className="badge bg-primary">4 Challenges</span>
      </div>
      <div className="card-body">
        <div className="row">
          {tasks.map(task => (
            <div key={task.id} className="col-md-6 mb-3">
              <div className="p-3 border rounded bg-light h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">{task.title}</h6>
                  <small className="text-danger fw-bold">{task.status}</small>
                </div>
                <p className="small text-muted mb-0">{task.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
