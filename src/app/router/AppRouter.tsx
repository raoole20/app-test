import { Route, Redirect } from 'react-router'
import HistorialPage from '../../pages/historial/HistorialPage'
import HistoyWithPlayer from '../../pages/historial/HistoyWithPlayer'
import Players from '../../pages/players/PlayerPage'
import Seleccionados from '../../pages/Seleccionados'

const AppRouter = () => {
    return (
    <>
        <Route exact path="/players">
            <Players />
        </Route>

        <Route exact path={'/history'}>
            <HistorialPage />
        </Route>

        <Route exact path={'/history/player/:playerId'}>
            <HistoyWithPlayer />
        </Route>

        <Route path="/seleccionados">
            <Seleccionados />
        </Route>
        <Route exact path="/">
            <Redirect to="/players" />
        </Route>
    </>
    )
}

export default AppRouter
