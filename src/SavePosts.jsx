import React,{useEffect, useState} from 'react'
import { postSave , listTodo} from './services/basic/listTodo';
import { useAsyncFn } from './hooks/useAsync';
const SavePosts = () => {
    const { loading: listLoading, 
        error: listError, value: listValue, execute: listExecute } = useAsyncFn(listTodo);
  useEffect(() => {
    console.log("here")
    listExecute();
  }, [listExecute]);
    const [formData, setFormData] = useState({
        id: 1,
        title: "",
        body: ""
      });
      const { loading, error, value, execute } = useAsyncFn(postSave);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await execute(formData);
            console.log("Saved Post:", response);
          } catch (error) {
            console.error("Error saving post:", error);
          }
      };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />

      <label htmlFor="body">Body:</label>
      <textarea id="body" name="body" value={formData.body} onChange={handleChange}></textarea>

      <button type="submit">Save</button>
    </form>
  )
}

export default SavePosts