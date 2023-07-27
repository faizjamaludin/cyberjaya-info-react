import { configureStore } from '@reduxjs/toolkit'
import authReducer from './user/authReducer'

export default configureStore({
    reducer: {
        auth: authReducer,
    },
})