import { createSlice } from "@reduxjs/toolkit";
import { rootImages, PlayerInterface } from "../../core";

const init = {
    players: Array<PlayerInterface>(),
}

const playerSlice = createSlice({
    name: 'player',
    initialState: init,
    reducers: {
        addPlayer(state, { payload, type }) {
           

            payload.forEach( (name:string, id: number) => {
                const keys = Object.keys(rootImages.images.emojis)
                const randomPosition = Math.floor( Math.random() * (keys.length - 1) )
                const randomEmoji:any = keys[randomPosition]

                state.players.push({
                    name,
                    position: id + 1,
                    icon: rootImages.images.emojis[randomEmoji as keyof typeof rootImages.images.emojis]
                })
            })
        }
    }
})

export const playerActions = playerSlice.actions
export const playerReducer = playerSlice.reducer