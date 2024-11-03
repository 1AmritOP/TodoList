import { useDispatch } from "react-redux";
import { changeFilter, search } from "../features/TodoSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [selectedOption, setselectedOption] = useState("");
  const [inpVal, setinpVal] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(inpVal))
  }, [inpVal])
  
  return (
    <div className=" w-full relative flex items-center justify-between gap-2 flex-wrap min-h-12 bg-[#FF6500]">
      <div className="filter mx-2 text-black text-sm ">
        <select
          onChange={(e) => {
            const value = e.target.value;
            setselectedOption(value);
            dispatch(changeFilter(value));
            // console.log("change  ..",selectedOption);
          }}
          value={selectedOption}
          name="filterSelector"
          id="filterSelector"
          className=" rounded-xl py-1"
        >
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="inComplete">inComplete</option>
        </select>
      </div>
      <h1 className="navHeading text-3xl font-semibold max-md:hidden ">Todo</h1>
      <div className="inp mx-2 text-black">
        <input
          type="text"
          placeholder=" search"
          className="rounded-xl p-1 pl-2 w-32"
          value={inpVal}
          onChange={(e)=>{
            setinpVal(e.target.value)
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
