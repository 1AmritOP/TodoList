import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <>
      <main className=" w-full min-h-screen bg-black text-white d-flex ">
        <div className="wrapper w-[45%] max-md:w-full  bg-[#1E3E62] min-h-[50vh] ">
          <BrowserRouter>
            <Navbar />
            {/* <TodoList /> */}
            <Routes>
              <Route exact path="/" element={<TodoList />} />
              <Route exact path="/addTodo" element={<AddTodo />} />
              <Route exact path="/update/:id" element={<UpdateTodo />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
