import React from 'react';

const Students = () => {
  return (
    <div>
      <table>
        <caption><h2>Student Details</h2></caption>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2300031514</td>
            <td>B Suraj Patra</td>
            <td>CSE</td>
            <td>2nd Year</td>
          </tr>
          <tr>
            <td>2300031943</td>
            <td>A. Abhinandan</td>
            <td>CSE</td>
            <td>2nd Year</td>
          </tr>
          <tr>
            <td>2300032009</td>
            <td>G. Sri Krishna Sudhindra</td>
            <td>CSE</td>
            <td>2nd Year</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;
