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
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

// reducer function 
function reducer(state, action) {
  switch (action.type) {
    case 'addTask': 
    return [...state,
      {
        id: state.length + 1,
        title: action.paylaod
      }
    ];

    case 'deleteTask': 
      return state.filter(del => del.id !== action.payload); 

    case 'updateTask':
      return;

    default: return state;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
 const [task, setTask] = useState(1);

  function handleTask(e) {
    setTask(e.target.value);
  }
  return (
    <>
      <h1>Create Todo List {todos.length}</h1>
      <br />
      <input style={{ fontSize: "2em"}}
        onChange={handleTask}
        type="text" placeholder="Add Task"/>
      <button type='submit'>Add Task</button>


{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        <br />

        <ActionButton dispatch={dispatch} payload={task} type={"addTask"}>
          <h2>Add</h2></ActionButton>
        {/* <h1>{state.count}</h1>
        <ActionButton dispatch={dispatch} payload={task} type={"deleteTask"}>
          <h2>Delete</h2></ActionButton>
        <br />
        <ActionButton dispatch={dispatch} paylaod={task} type={"updateTask"}>
          <h2>Update</h2></ActionButton> */} 
      
    </>
  );
};

export default Todos