import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        loading: true,
        data:[{
            username:'',
            name:'',
            password:'',
            avatar:'',
            example_images:[],
        }],
        error:'',

    },
    reducers:{
        login: (state, action) => {
            state.data.username === action.payload.username ? 
                state.data.loading=false
                :
                state.data.loading=true
        },
        register: (state, action) => {
            state.loading=false,
            state.data=action.payload
        },
        update: (state, action) => {
            if (action.payload.name) state.data.name = action.payload.name
            if (action.payload.avatar) state.data.avatar = action.payload.avatar
            if (action.payload.example_images) {
                if ( state.data.example_images ) {
                    state.data.example_images.push(action.payload.example_images)
                } else {
                    state.data.example_images = [action.payload.example_images]
                }
            }
        },
        logout: (state) => {
            state.loading=true
        }
    },
})

export const { register, login, logout, update } = authSlice.actions

export default authSlice.reducer