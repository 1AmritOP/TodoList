import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../features/TodoSlice";

const UpdateTodo = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [updateTodo, setupdateTodo] = useState("")
  const { id } = useParams();
  const allTodo = useSelector((state) => state.todo.value);

  const setTodo=(e)=>{
    setupdateTodo({...updateTodo,[e.target.name] : e.target.value})
    console.log(updateTodo);
    
  }

  useEffect(() => {
    if (id) {
      const singleTodo=allTodo.filter((elem)=> elem.id === id)
      setupdateTodo(singleTodo[0])
    }
  }, [])
  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(editTodo(updateTodo));
          navigate("/");
        }}
        className=" p-4 d-flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          value={updateTodo.title}
          onChange={setTodo}
          required
          className=" px-4 py-2 border text-black rounded-lg shadow-sm focus:outline-none "
          placeholder="enter title"
        />
        <input
          type="text"
          name="detail"
          value={updateTodo.detail}
          onChange={setTodo}
          required
          className=" px-4 py-2 border text-black rounded-lg shadow-sm focus:outline-none "
          placeholder="enter detail"
        />
        <button className="px-6 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
