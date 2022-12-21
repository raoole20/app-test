import { createSlice } from "@reduxjs/toolkit"


const init = { 
    open: false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState: init,
    reducers: {
        openModal(state){
            state.open = true
        },
        closeModal(state){
            state.open = false
        }
    }
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer