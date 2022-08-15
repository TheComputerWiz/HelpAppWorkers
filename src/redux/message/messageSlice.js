import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name:'message',
    initialState:{
        loading:true,
        data:[{
            message:[]
        }],
        error:'',
    },
    reducers:{
        create: (state, action) => {
            if (action.payload.message) {
                if ( state.data.message ) {
                    state.data.message.push(action.payload.message)
                } else {
                    state.data.message = [action.payload]
                }
            }
        },
    },
})

export const { create } = messageSlice.actions

export default messageSlice.reducer