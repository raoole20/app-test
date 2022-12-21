import { Route, Redirect } from 'react-router'
import HistorialPage from '../../pages/historial/HistorialPage'
import HistoyWithPlayer from '../../pages/historial/HistoyWithPlayer'
import Tab1 from '../../pages/players/PlayerPage'
import Tab2 from '../../pages/Tab2'
import Tab3 from '../../pages/Seleccionados'

const AppRouter = () => {
    return (
    <>
        <Route exact path="/players">
            <Tab1 />
        </Route>

        <Route exact path={'/history'}>
            <HistorialPage />
        </Route>

        <Route exact path={'/history/player/:playerId'}>
            <HistoyWithPlayer />
        </Route>

        <Route exact path="/tab2">
            <Tab2 />
        </Route>
        <Route path="/seleccionados">
            <Tab3 />
        </Route>
        <Route exact path="/">
            <Redirect to="/players" />
        </Route>
    </>
    )
}

export default AppRouter
