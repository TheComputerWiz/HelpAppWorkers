import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name:'message',
    initialState:{
        loading:true,
        data:[{
            messageInput:["Message"],
        }],
        error:'',
    },
    reducers:{
        create: (state, action) => {
            if(state.data.messageInput){
                state.data.messageInput.push(action.payload.messageInput)
            } else {
                state.data = action.payload
            }
        },
    },
})

export const { create } = messageSlice.actions

export default messageSlice.reducer