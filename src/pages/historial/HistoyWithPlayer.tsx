import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"

import AppContainer from "../../app/components/AppContainer"
import AppSpiner from "../../app/components/AppSpiner"
import { rootRouter } from "../../app/core"
import { fetchPlayers, playerActions } from "../../app/store/slices"
import HistoryPlayers from "./HistoryPlayers"

const HistoyWithPlayer = () => {
    const distpatch = useDispatch()
    const history = useHistory()

    const { playerId }:any = useParams()
    const history_player = useSelector((state: any) => state.player.history_player)


    /** 
     * TODO
     * Se realiza la request para obtener el historial
     */
    useEffect(() => {
        distpatch(fetchPlayers(playerId))
    }, [distpatch])


    const saveHandle = () => {
        distpatch(playerActions.seleccionarPlayer())
        history.replace('/seleccionados')
    }

    if (!history_player?.status) {
        return <AppSpiner url='/history' />
    }

    return (
        <AppContainer url="/history">
            <div className="container history-app">
                <header>
                    <h5 className="grup-title">{history_player.data.grup}</h5>
                    <div className="header-footer">
                        <span className="bold">Jugadores</span>
                        <span>{history_player.data.date}</span>
                    </div>
                </header>

                <section>
                    <HistoryPlayers list_player={history_player.data.participants || [] } />
                    <button className="app-btn_gerenic blue app-smal-shadow size-md" onClick={saveHandle}>SELECCIONAR</button>
                </section>
            </div>
        </AppContainer>
    )
}

export default HistoyWithPlayer
