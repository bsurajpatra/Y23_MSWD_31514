// Students.js
import React from 'react';
import Attendance from './Attendance';

const studentData = [
  { id: '2300031514', name: 'B Suraj Patra', branch: 'CSE', year: '2nd Year' },
  { id: '2300031943', name: 'A. Abhinandan', branch: 'CSE', year: '2nd Year' },
  { id: '2300032009', name: 'G. Sri Krishna Sudhindra', branch: 'CSE', year: '2nd Year' },
  { id: '2300031415', name: 'G. Manoj', branch: 'CSE', year: '2nd Year'},
];

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
            <th>Attendance</th> 
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td><Attendance /></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;