import React from 'react';

function StudentCard({ student }) {
  const status = student.marks >= 50 ? 'Passed' : 'Failed';
  const color = status === 'Passed' ? 'green' : 'red';


  return (
<div className="student-card">
  <h3>{student.name}</h3>
  <p>Age: {student.age}</p>
  <p>Marks: {student.marks ?? 'N/A'}</p>
  <p style={{ color }}>{student.marks !== undefined ? `Status: ${status}` : 'Status: N/A'}</p>
</div>

  );
}


export default StudentCard;