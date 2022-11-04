import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentOverview from '../Components/AppointmentOverview'

const Home = () => {
  const navigate = useNavigate()
  
  const handleClickNext = () => {
    console.log(`handle Click in App Called`)
    navigate('/s2')
  }

  const handleClickPrev = () => {
    console.log( `previous called`)
    navigate('/')
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8'>
          <h1>
            Home Page
          </h1>
          <div>
            <p>you will create a mock up and select the user  and continue with the flow where you will use certain tech stacks</p>
          </div>
          <button type='button' className='btn btn-warning' onClick={() => handleClickPrev()}>previous</button>
          <button type='button' className='btn btn-success' onClick={() => handleClickNext()}>next</button>
        </div>
        < AppointmentOverview />
      </div>
    </div>
  )
}

export default Home