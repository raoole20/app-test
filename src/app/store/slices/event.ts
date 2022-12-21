import { createSlice } from '@reduxjs/toolkit'

const init = {}

const eventSlice = createSlice({
    name: 'event',
    initialState: init,
    reducers: {

    } 
})

export const eventActions = eventSlice.actions
export const eventReducer = eventSlice.reducer