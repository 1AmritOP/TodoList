import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../features/TodoSlice";
import { useNavigate } from "react-router-dom";

const Todo = ({ title, detail, isCompleted, id }) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  return (
    <>
      <div className=" w-full flex flex-wrap min-h-fit px-4 gap-2 items-center justify-between my-2">
        <div className=" flex gap-2 items-center">
          <div className="checkBox">
            <input
              className=" w-6 h-6 rounded-full mx-2 "
              type="checkbox"
              name="check"
              id="check"
              checked={isCompleted}
              onClick={() => dispatch(toggleCompleted(id))}
            />
          </div>
          <section>
            <h1 className=" text-xl font-bold"> {title} </h1>
            <p> {detail} </p>
          </section>
        </div>
        <div className="actions flex ">
          <button onClick={()=>{
            navigate(`/update/${id}`)
          }} className="edit scale-150 mx-2">
            <FaEdit />
          </button>
          <button
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
            className="delete scale-150 mx-2"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Todo;
