import React from 'react'
import { connect } from 'react-redux'
import Nav from './components/Nav'
import { addToCart, removeFromCart, resetCart } from './redux/action'

const App = (props) => {
  const product = {
    name: 'iphone',
    price: 999
  }
  console.log('show app props', props)
  return (
    <div>
      <h1>Learning React Redux and Sagas App</h1>
      <Nav />
      <h1>{product.name}</h1>
      <h1>${product.price}</h1>
      <button className='btn btn-primary' onClick={() => props.add()}>add </button>
      <button className='btn btn-warning' onClick={() => props.remove()}>remove </button>
      <button className='btn btn-danger' onClick={() => props.reset()}>reset</button>

    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addToCart()),
    remove: () => dispatch(removeFromCart()),
    reset: () => dispatch(resetCart())
  }
}

export default connect(null, mapDispatchToProps)(App);