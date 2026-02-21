import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import './App.css';

// reducer function 
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [step, setStep] = useState(1);

  function handleStepSize(e) {
    setStep(e.target.value);
  }
  return (
    <>
      
        <h1>Create Todo List</h1>
        <fieldset>
          <legend></legend>
       
        <input style={{ fontSize: "2em", fieldSizing: 'content' }}
          onChange={handleStepSize}
          type="text" name="" id="" />
          <button type='submit'>Add Task</button>
      </fieldset>

      <ActionButton dispatch={dispatch} payload={step} type={"increment"}>
        <h2>+</h2></ActionButton>
      <h1>{state.count}</h1>
      <ActionButton dispatch={dispatch} payload={step} type={"decrement"}>
        <h2>-</h2></ActionButton>
      <br />
      <ActionButton><h2>Reset</h2></ActionButton>

    </>
  );
}

export default App