import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import './App.css';

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  }
];

// reducer function 
function reducer(state, action) {
  switch (action.type) {
    case 'addTask':
      return [
        ...state,
      {
        userId: 1,
        id: state.length + 1,
        title: action.paylaod,
        completed: false
      }
      ];

    case 'deleteTask':
      return state.filter(todo => todo.id !== action.payload);

    case 'toggleComplete':
      return state.map(todo => 
        todo.id === action.paylaod
        ? {...todo, completed: !todo.completed }
        : todo
      );

      case 'editTask':
      return state.map(todo => 
        todo.id === action.payload.id ?
        {...todo, title: action.payload.title } : todo
      );

    case 'resetTodos':
      return initialState;

    default: return state;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleTask(e) {
    setTask(e.target.value);
  }

  function handleSubmit() {
    if (editingId) {
      dispatch({
        type: "editTask",
        paylaod: { id: editingId, title: task}
      });
      setEditingId(null);
    } else {
      dispatch({
        type: "addTask",
        paylaod: task
      });
    }
    setTask("");
  }
  return (
    <>
      <h1>Create Todo List {todos.length}</h1>
      <br />
      <input 
      style={{ fontSize: "2em" }}
        onChange={handleTask}
        type="text" placeholder="Add Task" />
      <ActionButton dispatch={dispatch} payload={task} type={"addTask"}>
        Add</ActionButton>


      {todos.map(todo => (
        <li key={todo.id}>{todo.title}

      <ActionButton dispatch={dispatch} action={{type: "deleteTask", payload: todo.id }}>
       Delete</ActionButton>
       </li>
       ))}
      <br />
       <ActionButton dispatch={dispatch} payload={todos} type={"editTask"}>
        Edit</ActionButton>
        <br />
      <button onClick={() => dispatch({ type: "resetTodos", payload: initialState })}>
      Reset</button>
<br />

    </>
  );
};

export default Todos