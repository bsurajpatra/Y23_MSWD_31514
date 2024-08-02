import React from 'react';

const Faculty = () => {
  return (
    <div>
      <table>
      <caption><h2>Faculty Details</h2></caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. B Ashok</td>
            <td>Assistant Professor</td>
            <td>CSE</td>
          </tr>
          <tr>
            <td>Dr. T Srinivas Rao</td>
            <td>Associate Professor</td>
            <td>Mathematics</td>
          </tr>
          <tr>
            <td>V. Murali Mohan</td>
            <td>Professor</td>
            <td>CSE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Faculty;
