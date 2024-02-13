import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment} from './reduxStore/features/counter/counterSlice'
import './App.css'

function App() {
  
  const count = useSelector((state) => state.counter);
  
  const dispatch = useDispatch();

  return (
    <>
     <h1>Redux in React </h1>
     <h2>Count: {count}</h2>
     <button onClick={() => dispatch(increment())}>Increment</button>
     <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
