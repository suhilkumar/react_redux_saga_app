import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentOverview from '../Components/AppointmentOverview'


const Eligibility = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log(`handle Click in App Called`)
    navigate('/s6')

  }
  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-sm-8'>
        <h1>
          Eligibility Page
        </h1>
        <button type='button' className='btn btn-primary' onClick={() => handleClick()}>next</button>
      </div>
      < AppointmentOverview />
    </div>
  </div>
  )
}

export default Eligibility