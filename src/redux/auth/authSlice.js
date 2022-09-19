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
            example_of_work_images:[],
        }],
        error:'',

    },
    reducers:{
        login: (state, action) => {
            state.loading=false,
            state.data=action.payload
        },
        register: (state, action) => {
            state.loading=false,
            state.data=action.payload
        },
        update: (state, action) => {
            if (action.payload.name) state.data.name = action.payload.name
            if (action.payload.avatar) state.data.avatar = action.payload.avatar
            if (action.payload.example_of_work_images) {
                if ( state.data.example_of_work_images ) {
                    state.data.example_of_work_images.push(action.payload.example_of_work_images)
                } else {
                    state.data.example_of_work_images = [action.payload.example_of_work_images]
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