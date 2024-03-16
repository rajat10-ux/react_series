import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../Feautres/Todo/todoSlice';

export const store=configureStore({
        reducer:todoReducer
})