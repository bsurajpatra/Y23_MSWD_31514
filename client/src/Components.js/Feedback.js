import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback-container">
    <h1>Feedback Collection</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Department</th>
          <th>Feedback Type</th>
          <th>Suggestion/Issue</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: 'Dr. Smith',
            course: 'Math',
            dept: 'Mathematics',
            type: 'Good',
            suggestion: 'No issues, well explained.'
          },
          {
            name: 'Prof. Johnson',
            course: 'Physics',
            dept: 'Physics',
            type: 'Bad',
            suggestion: 'Lectures are too fast.'
          },
          {
            name: 'Dr. Lee',
            course: 'Chemistry',
            dept: 'Chemistry',
            type: 'Worst',
            suggestion: 'Needs improvement in lab sessions.'
          },
          {
            name: 'Ms. Brown',
            course: 'Biology',
            dept: 'Biology',
            type: 'Good',
            suggestion: 'Engaging and interactive classes.'
          },
          {
            name: 'Dr. Wilson',
            course: 'Computer Science',
            dept: 'Computer Science',
            type: 'Bad',
            suggestion: 'Assignments are unclear.'
          }
        ].map((feedback, index) => (
          <tr key={index}>
            <td>{feedback.name}</td>
            <td>{feedback.course}</td>
            <td>{feedback.dept}</td>
            <td>{feedback.type}</td>
            <td>{feedback.suggestion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Feedback;
