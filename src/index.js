import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import Home from './pages/Home';
import Address from './pages/Address';
import Eligibility from './pages/Eligibility';
import SelectDate from './pages/SelectDate';
import WhichUser from './pages/WhichUser';
import WhichVaccine from './pages/WhichVaccine';
import Confirm from './pages/Confirm'
import rootReducer from './redux/reducer/rootReducer'

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/s1' element={<Home/>} />
      <Route path='/s2' element={<WhichUser/>} />
      <Route path='/s3' element={<Address/>} />
      <Route path='/s4' element={<WhichVaccine/>} />
      <Route path='/s5' element={<Eligibility/>} />
      <Route path='/s6' element={<SelectDate/>} />
      <Route path='/s7' element={<Confirm/>} />
    </Routes>
  </BrowserRouter>
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
