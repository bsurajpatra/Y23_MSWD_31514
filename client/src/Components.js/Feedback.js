import React, { useState } from 'react';
import FeedBackForm from './FeedBackForm';

const Feedback = () => {
  const [data, setData] = useState([]); 

  const handleNewFeedback = (newFeedback) => {
    setData([...data, newFeedback]); 
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Collection</h1>
      <FeedBackForm onSubmit={handleNewFeedback} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Speaking Skills Rating</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.course}</td>
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
