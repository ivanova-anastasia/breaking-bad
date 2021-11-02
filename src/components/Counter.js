import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store/action-creators'
import './counter.css'

export const CounterComponent = ({ counter, handleIncrement, handleDecrement }) => (
  <div>
    <p className="counter">Counter: {counter}</p>
    <button className="btn btn-increment" onClick={handleIncrement}>+</button>
    <button className="btn btn-decrement" onClick={handleDecrement}>-</button>
  </div>
)

const mapStateToProps = ({ counter }) => ({
    counter,
  })
  
  const mapDispatchToProps = {
    handleIncrement: increment,
    handleDecrement: decrement,
  }
  
  export const Counter = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CounterComponent)