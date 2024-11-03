import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.value);
  const filter = useSelector((state) => state.todo.filter);
  const searchData = useSelector((state) => state.todo.searchData);
  const navigate = useNavigate();

  if (todos.length === 0) {
    return (
      <>
        <h1 className=" w-full flex justify-center items-center">
          <button
            onClick={() => {
              navigate("/addTodo");
            }}
          >
            <IoIosAddCircle className=" text-[#FFF078] mt-2 w-12 h-12" />
          </button>
        </h1>
        <h1 className=" text-center text-3xl font-bold">
          No Todo Available !!{" "}
        </h1>
        <p className=" text-center text-sm">
          You can add todo by tapping Add button
        </p>
      </>
    );
  }
  return (
    <>
      <h1 className=" w-full flex justify-center items-center">
        <button
          onClick={() => {
            navigate("/addTodo");
          }}
        >
          <IoIosAddCircle className=" text-red-500 mt-2 w-12 h-12" />
        </button>
      </h1>
      {todos
        .filter((elem) => {
          if (searchData === "") {
            return elem;
          } else{
            return (elem.title.toLowerCase().includes(searchData.toLowerCase()) || elem.detail.toLowerCase().includes(searchData.toLowerCase())  )
          }
        })
        .filter((elem) => {
          if (filter === "All") {
            return elem;
          } else if (filter === "Complete") {
            return elem.isCompleted === true;
          } else {
            return elem.isCompleted === false;
          }
        })
        .map((elem) => (
          <Todo
            key={elem.id}
            title={elem.title}
            detail={elem.detail}
            isCompleted={elem.isCompleted}
            id={elem.id}
          />
        ))}
    </>
  );
};

export default TodoList;
