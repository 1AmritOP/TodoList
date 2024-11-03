import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const initialState = {
  value: JSON.parse(localStorage.getItem('todos')) || [],
  filter: "All",
  searchData: "",
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        state.value.push({
            id: nanoid(),
            title: action.payload.title,
            detail: action.payload.detail,
            isCompleted: false,
        })
    },
    toggleCompleted:(state,action)=>{
        const todo=state.value.find((elem)=> elem.id === action.payload)
        if (todo) {
            todo.isCompleted= ! todo.isCompleted;
        }
    },
    deleteTodo:(state,action)=>{
        state.value=state.value.filter((elem)=> elem.id !== action.payload)
    },
    changeFilter:(state,action)=>{
      state.filter=action.payload
    },
    editTodo:(state,action)=>{
      
      state.value=state.value.map((elem)=>(
        elem.id === action.payload.id ? action.payload : elem
      ))
    },
    search:(state,action)=>{
      state.searchData=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo,toggleCompleted,deleteTodo,changeFilter,editTodo,search } = todoSlice.actions

export default todoSlice.reducer