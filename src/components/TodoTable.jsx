import React from 'react';
import TodoRowItem from './TodoRowItem';

const TodoTable = (props) => {
  return (
    <table className='table table-hover'>
        
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
            </tr>
        </thead>
        
        <tbody>
            {
                props.todo.map((t) => (
                    <TodoRowItem 
                        key={t.rowNumber}
                        rowNumber={t.rowNumber}
                        rowDescription={t.rowDescription} 
                        rowAssigned={t.rowAssigned} 
                        deleteTodo={props.deleteTodo}    
                    />
                ))
            }
           


        </tbody>
    </table>
  )
}

export default TodoTable


/*

* React requires a unique key or unique identifier. We all it `key`. This is completely on react to identify
each item or each componet . On adding the `key` , on the console of the browser u will see the error gone.
React does this to make sure that the dev adds a uniques into ur props to distinguish other data entered.




*/