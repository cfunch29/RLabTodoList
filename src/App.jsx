import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import './App.css';

// reducer function 
function reducer(state, action){
  switch (action.type) {
    case "increment":
       return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
      default: 
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [step, setStep] = useState(0);

  function handleStepSize(e){
    setStep(e.target.value);
  }
  return (
    <>
      <fieldset>
        <legend>Todo List</legend>
        <input style={{fontSize: "2em", fieldSizing: 'content'}} 
        onChange={handleStepSize}
        type="text" name="" id="" />
      </fieldset>

      <ActionButton dispatch={dispatch} type={"increment"}>
        <h2>+</h2></ActionButton>
        <h1>{state.count}</h1>
       <ActionButton dispatch={dispatch} type={"decrement"}>
        <h2>-</h2></ActionButton>

    </>
  );
}

export default App