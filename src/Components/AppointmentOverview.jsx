import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AppointmentOverview = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')

  }
  return (
    <div className='col-sm-4' style={{ backgroundColor: "beige", height: '100vh' }}>
      <h3>Appointment Overview</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/s1" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }><h4>Home</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s2" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }
          > <h4>User</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s3" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }><h4>Address</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s4" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }><h4>Vaccines</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s5" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }><h4>Eligibility</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/s6" style={({ isActive }) =>
            isActive
              ? {
                color: '#fff',
                background: '#7600dc',
              }
              : {}
          }><h4>Date & Time</h4></NavLink>
        </li>

      </ul>

    </div >
  )
}

export default AppointmentOverview