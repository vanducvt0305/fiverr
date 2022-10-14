import {configureStore} from '@reduxjs/toolkit'
import findJobReducer from './reducers/findJobReducer'


export const store = configureStore({
    reducer:{
        findJobReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type Appdispatch = typeof store.dispatch