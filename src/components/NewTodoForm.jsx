import React from 'react';
import { useState } from 'react';


const NewTodoForm = (props) => 
{
    const [description,setDescription]=useState('');
    const [assignment,setAssignment]=useState('');

    const submitTodo = () =>
    {
     
        if(description!== '' && assignment !== '')
        {
            props.addTodo(description,assignment);
            setDescription('');
            setAssignment('');
            //after passing the submitting the props we have to make the set states empty
            //so that future states can be added.
        }

    }

  return (
    <div className='mt-5'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input type='text' 
                       className='form-control'
                       onChange={(e)=>setAssignment(e.target.value)} 
                       value={assignment}
                       required>    
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea className='form-control'
                          rows={3}
                          onChange={(e)=>setDescription(e.target.value)}
                          value={description}
                           required>
                </textarea>
            </div>
            <button type='button' 
                    className='btn btn-primary mt-3'
                    onClick={submitTodo}> Add Todo </button>
        </form>
      
    </div>
  )
}

export default NewTodoForm
