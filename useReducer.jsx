
import { useReducer } from "react";


export default function App() {

    const initialState=[];

function reducer(state,action){
    switch(action.type){
        case "ADD_TASK":
            return [...state,  { id: state.length + 1, name: action.payload}]

        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.payload)
        default:
            return state;
    }
    
}
    
    const[todos,dispatch]=useReducer(reducer, initialState)

    const handleChange = (e) =>{
        if(e.key==="Enter"){
            dispatch({type:"ADD_TASK", payload: e.target.value})
        }
    }
    const handleDelete=(id)=>{
        dispatch({type:"DELETE_TASK", payload:id})
    }
    
  return (
      <>
          <h2>Task List{todos.length}</h2>
          <label htmlFor="task">Enter the Task</label>
          <input type="text" id="task" onKeyDown={(e)=>{handleChange(e)}}></input>
          <ul>
              {
                  todos.map(todo=>(
                      <li key={todo.id}>{todo.name}
                      <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                      </li>
                  ))
              }
          </ul>
     </>
  )
    
}
    
       


