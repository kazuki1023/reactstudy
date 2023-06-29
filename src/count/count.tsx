import React, {useState} from 'react';
import '../App.css';

const Counter = () => {
const initialState = Math.floor(Math.random() * 10) + 1;

const [count, setCount] = useState(initialState);
const addCount = () => {
  setCount((prevCount) => prevCount + 1);
}
const reduceCount = () => {
  setCount((prevCount) => prevCount - 1);
}

return (
  <>
  <div>
    <p>現在の数字は{count}です</p>
    <button onClick={addCount}></button>
    <button onClick={reduceCount}></button>
  </div>
  </>
)
}
