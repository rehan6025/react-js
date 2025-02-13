import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id : 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action)=> {
            const id = action.payload.id
            state.todos = state.todos.filter( (todo)=> todo.id !== id)
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer