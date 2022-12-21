import { IonSpinner } from '@ionic/react'
import AppContainer from './AppContainer'

const AppSpiner = ({ url }: any) => {
    return (
        <AppContainer url={url}>
            <div style={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IonSpinner color={'medium'} />
            </div>
        </AppContainer>
    )
}

export default AppSpiner
