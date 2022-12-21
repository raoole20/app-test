import { FC } from 'react'
import { IonContent, IonPage } from '@ionic/react'

interface AppProps {
    children: JSX.Element | JSX.Element[]
}

const AppContainer: FC<AppProps> = (props: AppProps) => {
    return (
        <IonPage className='main-body' color='primary'>
            <IonContent className='main-body'>
              {props.children}
            </IonContent> 
        </IonPage>
    )
}

export default AppContainer
