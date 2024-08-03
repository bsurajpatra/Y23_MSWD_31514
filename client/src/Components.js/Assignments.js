import React from 'react';

const Assignments = () => {
  const assignments = [
    { subject: 'DAA', dueDate: '2024-08-15', grading: 'A+', type: 'Skill' },
    { subject: 'DBMS', dueDate: '2024-08-20', grading: 'A', type: 'ALM' },
    { subject: 'NPS', dueDate: '2024-08-25', grading: 'B+', type: 'Home Assignment' },
    { subject: 'PSQT', dueDate: '2024-08-30', grading: 'A-', type: 'Tutorial' },
    { subject: 'LAA', dueDate: '2024-09-05', grading: 'B', type: 'ALM' }
  ];

  return (
    <div className="assignments-container">
      <h1>Assignments</h1>
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Grading</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.subject}</td>
              <td>{assignment.dueDate}</td>
              <td>{assignment.grading}</td>
              <td>{assignment.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
