import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import authReducer from './auth/authSlice'
import messageReducer from './message/messageSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    message: messageReducer,
  },
})