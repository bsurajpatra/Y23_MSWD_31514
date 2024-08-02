import React from 'react';

const Courses = () => {
  return (
    <div>
      <table>
        <caption><h2>Course Details</h2></caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course Code</th>
            <th>LTPS</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mern Stack Web Development</td>
            <td>23CS06EF</td>
            <td>0-0-6-4</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Design and Analysis of Algorithm</td>
            <td>23CS2205A</td>
            <td>4-0-4-4</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Database Management System</td>
            <td>23AD2102R</td>
            <td>3-0-2-0</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
