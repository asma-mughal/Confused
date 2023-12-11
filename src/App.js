import logo from './logo.svg';
import './App.css';
import { listTodo, listTodoById } from './services/basic/listTodo';
import { useAsync } from './hooks/useAsync';
import PostById from './PostById';
import SavePosts from './SavePosts';
import { useState } from 'react';
function App() {
  const [flag,setFlag]=useState(false)
  const { loading, error, value: todos, execute } = 
  useAsync(() => listTodo(),[flag]);
 console.log(todos)
  return (
    <div className="App">
    <p onClick={()=>setFlag(!flag)}> Here is the working of the List:</p>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error?.message}</p>}
    {todos && (
      <ul className=''>
        {todos?.map((todo) => (
          <>
          <li key={todo?.id}>{todo?.title}</li>
          <button>Get One Post</button>
          </>
        ))}
      </ul>
    )}

{<PostById id={1} />}
<SavePosts />
  </div>
  );
}

export default App;
