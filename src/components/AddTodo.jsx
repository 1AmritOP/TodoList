import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../features/TodoSlice";

const AddTodo = () => {
    const navigate=useNavigate()
    const [data, setdata] = useState({})
    const dispatch=useDispatch()

    const getData=(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
        console.log(data);
    }
    

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(data));
        navigate("/");
      }}
      className=" p-4 d-flex flex-col gap-4"
    >
      <input
        type="text"
        name="title"
        onChange={getData}
        required
        className=" px-4 py-2 border text-black rounded-lg shadow-sm focus:outline-none "
        placeholder="enter title"
      />
      <input
        type="text"
        name="detail"
        onChange={getData}
        required
        className=" px-4 py-2 border text-black rounded-lg shadow-sm focus:outline-none "
        placeholder="enter detail"
      />
      <button className="px-6 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 ">
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
