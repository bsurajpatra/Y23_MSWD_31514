import React from 'react';

const TimeTable = () => {
  const timetable = [
    ['Slot', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    ['Monday', '***', '***', 'DAA-M202', 'DAA-M202', 'NPS-R301B', 'NPS-R301B', 'MWD-C406', '***', 'DBMS-C423', '***', '***'],
    ['Tuesday', '***', '***', 'DBMS-C318A', 'DBMS-C318A', 'PSQT-C225', 'PSQT-C225', '***', 'LAA-C421B1', 'LAA-C421B1', 'DAA-M121', '***'],
    ['Wednesday', '***', '***', 'NPS-R304A', 'NPS-R304A', 'DBMS-C422', 'DBMS-C422', '***', 'MWD-C017', 'MWD-C017', 'SIL-S101', 'SIL-S101'],
    ['Thursday', '***', '***', 'LAA-M306', 'LAA-M306', 'DAA-R405B', 'DAA-R405B', '***', 'DASS-L615', 'DASS-L615', 'FE-LAB', 'FE-LAB'],
    ['Friday', '***', '***', 'PSQT-C608', 'PSQT-C608', 'LAA-C217', 'LAA-C217', '***', 'DASS-C422', 'DASS-C422', '***', '***']
  ];

  return (
    <div className="timetable-container">
      <h1>Weekly Time Table</h1>
      <table className="timetable-table">
        <tbody>
          {timetable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
