import React from 'react';
import bg from "./Assets/Images/bg-2.jpg";
import './Assets/Images/UnderMaintenance.css';

function UnderMaintenance() {
  return (
    <body>
        <img src={bg} width={1000}></img>
        <h1 className='maint'>Site Under Maintenance!</h1>
        
    </body>
  )
}

export default UnderMaintenance;