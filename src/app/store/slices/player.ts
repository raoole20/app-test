import { createSlice } from "@reduxjs/toolkit";
import { rootImages, PlayerInterface } from "../../core";

const players:any = localStorage.getItem('players') 
console.log(JSON.parse(players))

const init = {
  players:  JSON.parse(players) || Array<PlayerInterface>() ,
  history: {
    status: 'incomplete',
    error: 'false',
    data: []
  },
  history_player: {
    status: 'incomplete',
    error: 'false',
    data: {
      grup: 'los bellakitos',
      date: '16 marzo 2021',
      participants: [
        {
          name: '',
          position: 1,
          icon: ''
        }
      ]
    }
  }


}

const playerSlice = createSlice({
  name: 'player',
  initialState: init,
  reducers: {
    addPlayer(state, { payload, type }) {


      payload.forEach((name: string, id: number) => {
        const keys = Object.keys(rootImages.images.emojis)
        const randomPosition = Math.floor(Math.random() * (keys.length - 1))
        const randomEmoji: any = keys[randomPosition]

        state.players.push({
          name,
          position: id + 1,
          icon: rootImages.images.emojis[randomEmoji as keyof typeof rootImages.images.emojis]
        })
      })
    },
    removePlayer(state, { payload }) {
      state.players = state.players.filter((player: any, index: number) => index !== payload)
    },
    fetchHistory(state, { payload }) {
      state.history = payload
    },
    fetchHistoryPLayer(state, { payload }) {
      state.history_player = payload
    },
    seleccionarPlayer(state) {
      const statePlayer = state.history_player.data.participants
      state.players = statePlayer
    }
  }
})

export const fetchHistory: any = () => {
  return async (dispatch: any) => {
    await fetch('https://fakestoreapi.com/products/1').then(response => {
      if (response.status === 200) {
        dispatch(playerSlice.actions.fetchHistory({
          status: 'complite',
          error: false,
          data: [
            {
              id: 1,
              name: 'Los Bellakitos',
              date: '2 marzo 2021'
            },
            {
              id: 2,
              name: 'avengers',
              date: '2 Marzo 2021'
            },
            {
              id: 21,
              name: 'Justice League',
              date: '16 Marzo 2021'
            },
            {
              id: 3,
              name: 'los trumpsitos',
              date: '16 Marzo 2021'
            },
            {
              id: 4,
              name: 'SOMBODY',
              date: '16 Marzo 2021'
            },
            {
              id: 5,
              name: 'contratenme',
              date: '16 Marzo 2021'
            },
            {
              id: 13,
              name: 'soy buena gente',
              date: '16 Marzo 2021'
            },
          ]
        }))
      }
    }).catch(err => {
      dispatch()
    })
  }
}

export const fetchPlayers: any = (palyerId: string) => {
  return async (dispatch: any) => {
    await fetch('https://fakestoreapi.com/products/1').then(response => {
      if (response.status === 200) {
        dispatch(playerSlice.actions.fetchHistoryPLayer({
          status: 'complite',
          error: false,
          data: {
            grup: 'los bellakitos',
            date: '16 marzo 2021',
            participants: [
              {
                name: 'raulito',
                position: 1,
                icon: rootImages.images.emojis.red
              },
              {
                name: 'maria',
                position: 2,
                icon:  rootImages.images.emojis.red
              },
              {
                name: 'raulito',
                position: 3,
                icon:  rootImages.images.emojis.red
              },
              {
                name: 'animalito',
                position: 4,
                icon: rootImages.images.emojis.red
              },
              {
                name: 'manuel',
                position: 5,
                icon: rootImages.images.emojis.red
              },
              {
                name: 'beba',
                position: 6,
                icon:  rootImages.images.emojis.red
              },
            ]
          }

        }))
      }
    }).catch(err => {
      dispatch()
    })
  }
}


export const playerActions = playerSlice.actions
export const playerReducer = playerSlice.reducer