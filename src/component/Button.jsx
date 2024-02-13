import React from 'react'
import {useDispatch} from 'react-redux'
import {increment, decrement} from '../reduxStore/features/counter/counterSlice'

const Button = () => {

    const dispatch = useDispatch();
  return (
    <>
        {/* <h1>this is button component</h1> */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Button