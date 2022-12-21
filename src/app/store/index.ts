import { configureStore } from '@reduxjs/toolkit'
import { eventReducer, playerReducer } from './slices'
import { modalReducer } from './slices/modal'

export const store = configureStore({
    reducer: {
        event: eventReducer,
        player: playerReducer,
        modal: modalReducer
    }
})
