import { createSlice } from "@reduxjs/toolkit";

const name = localStorage.getItem('name') || 'Guest'
const initialState =[{
    message: `Welcome ${name} it's good to see you!`,
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww'
}]
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.push({...action.payload, imgUrl: 'https://images.unsplash.com/photo-1648884266836-517ad583e720?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'})
            // Add a new message to the state and image is hard coded for now but can be passed as a payload
        }
    }
})

export const { addMessage } = messageSlice.actions
export default messageSlice