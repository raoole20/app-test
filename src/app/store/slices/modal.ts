import { createSlice } from "@reduxjs/toolkit"


const init = { 
    open: false,
    showConfirm: false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState: init,
    reducers: {
        openModal(state){
            state.open = true
        },
        openConfirmModal(state) {
            state.showConfirm = true
        },
        closeModal(state){
            state.open = false
            state.showConfirm = false
        }
    }
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer