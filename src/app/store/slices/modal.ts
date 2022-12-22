import { createSlice } from "@reduxjs/toolkit"

const init = { 
    open: false,
    showConfirm: false,
    showIconModal: false, 
    payload: {
        player: null,
    }
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
        openIconModal(state, payload) {
            state.showIconModal = true
            state.payload = {
                player: payload.payload.player
            }
        },
        closeModal(state){
            state.open = false
            state.showConfirm = false
            state.showIconModal = false
        }
    }
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer