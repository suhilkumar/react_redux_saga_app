import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentOverview from '../Components/AppointmentOverview'

const SelectDate = () => {
  const navigate = useNavigate()
  const handleClickNext = () => {
    console.log(`handle Click in App Called`)
    navigate('/s7')
  }

  const handleClickPrev = () => {
    console.log( `previous called`)
    navigate('/s5')
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8'>
          <h1>
            Select Date Page
          </h1>
          <button type='button' className='btn btn-warning' onClick={() => handleClickPrev()}>Previous</button>
          <button type='button' className='btn btn-success' onClick={() => handleClickNext()}>next</button>
        </div>
        < AppointmentOverview />
      </div>
    </div>
  )
}

export default SelectDate