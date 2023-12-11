import React, {useEffect} from 'react'
import { useAsyncFn } from './hooks/useAsync';
import { listTodoById } from './services/basic/listTodo';
const PostById = ({id}) => {
    const { loading, error, value:todo, execute } = useAsyncFn(listTodoById);

    useEffect(() => {
      execute({ id });
      
    }, [execute, id]);
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error fetching single post: {error.message}</div>;
    }
    if (todo) {
      console.log("Single Post:", todo);
    }
  
  return (
    <div>{todo?.title}
    <p>hellow this is my first commit </p>
    </div>
  )
}

export default PostById