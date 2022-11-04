import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentOverview from '../Components/AppointmentOverview'

const WhichVaccine = () => {
  const navigate = useNavigate()
 
  const handleClickNext = () => {
    console.log(`handle Click in App Called`)
    navigate('/s5')
  }

  const handleClickPrev = () => {
    console.log( `previous called`)
    navigate('/s3')
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8'>
          <h1>
            Select Vaccine Page
          </h1>
          <button type='button' className='btn btn-warning' onClick={() => handleClickPrev()}>Prev</button>
          <button type='button' className='btn btn-success' onClick={() => handleClickNext()}>next</button>
        </div>
        < AppointmentOverview />
      </div>
    </div>
  )
}

export default WhichVaccine