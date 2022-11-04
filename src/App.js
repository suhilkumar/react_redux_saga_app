import './App.css';
import { useNavigate } from 'react-router-dom';




function App() {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(`handle Click in App Called`)
    navigate('/s1')

  }


  return (
    <div className="App">
      <h2> Welcome to my schedule an appointment app</h2>
      <button type='button' className='btn btn-primary' onClick={() => handleClick()}>enter</button>
    </div>
  );
}

export default App;
