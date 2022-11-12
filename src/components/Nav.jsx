import React, {useState, useEffect} from 'react'
import { connect} from 'react-redux'

const Nav = props => {
const [count, setCount] = useState(0);

console.log(`show Nav Props ${props}`);
const {get} = props;
useEffect (()=>{
setCount((get))
}, [get])
    return (
        <div style={{backgroundColor: 'yellow'}}>
          <span style={{textAlign:"end"}}><h1>Cart:{count}</h1></span>
        </div>
    )
}
const mapStateToProps = state => {
  console.log(`map state to props ${state}`)
  return  {
    get : state.product.value
  }
}
export default connect(mapStateToProps)(Nav);