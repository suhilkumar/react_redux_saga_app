import React from 'react'
import { useNavigate,  } from 'react-router-dom'
import AppointmentOverview from '../Components/AppointmentOverview'

const WhichUser = (props) => {
  const navigate = useNavigate()
  const handleClickNext = () => {
    console.log(`handle Click in App Called`)
    navigate('/s3')
  }

  const handleClickPrev = () => {
    console.log( `previous called`)
    navigate('/s1')
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8'>
          <div className='row'>
          <h1>
            Select User Page
          </h1>
          <h4>Select user for vaccine schedule</h4>
          <div className="card">
            <div className="card-body">

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <h3>{props.name ?? 'Suhil'}</h3>
                </label>
              </div>
            </div>

          </div>
          <div className="justify-align-between">
            <button type='button' className='btn btn-warning' onClick={() => handleClickPrev()}>previous</button>
            <button type='button' className='btn btn-success' onClick={() => handleClickNext()}>next</button>
          </div>
          </div>
        </div>
        < AppointmentOverview />
      </div>
    </div>
  )
}

export default WhichUser