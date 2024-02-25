import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import TodoTable from './components/TodoTable.jsx';
import NewTodoForm from './components/NewTodoForm.jsx';
import './App.css';

function App()
{

  const[showAddToDoForm,setShowAddToDoForm]=useState(false);

  const [todos,setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three'},
  ])

  const addTodo = (description, assigned) => 
  {
    let rowNumber = 0;
      if (todos.length > 0)
      {
        rowNumber = todos[todos.length - 1].rowNumber + 1;
      } 
      else
      {
        rowNumber = 1;
      }
      const newTodo = 
      {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos((todos) => [...todos, newTodo])
      //we destructure the todos array by using spread operator.
  }

    const deleteTodo = (deleteTodoRowNumber) =>
    {
        let filtered = todos.filter(function (value) 
        {
          return value.rowNumber !== deleteTodoRowNumber;
        }
    );
      setTodos(filtered);
    }


  return (
     <div className="mt-5 container">
        <div className='card'>
          <div className='card-header'>
              Your Todo 's Table
          </div>
          <div className='card-body'>

           <TodoTable todo={todos} deleteTodo={deleteTodo}/>
           
           <button onClick={ () => setShowAddToDoForm(!showAddToDoForm) } 
                   className='btn btn-primary'>
              {showAddToDoForm ? 'Close New Todo' : 'New Todo'}
            </button>
           {
              showAddToDoForm && <NewTodoForm addTodo={addTodo} />
           }
           
          </div>
        </div>

     </div>
    
  );
}

export default App;
