import { CSSProperties, FC } from 'react'
import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from '@ionic/react'
import { rootImages } from '../core'
import { Link } from 'react-router-dom'

interface AppProps {
    children: JSX.Element | JSX.Element[],
    url?: string,
    noURL?: boolean
}

const AppContainer: FC<AppProps> = (props: AppProps) => {

    const style:CSSProperties = {
        visibility: `${props.noURL ? 'hidden' : 'visible'}`
    }

    return (
        <IonPage className='main-body' color='primary'>
            <IonContent className='main-body'>
                 <div className='app-container-header' style={style} >
                    <IonGrid>
                        <IonRow>
                            <IonCol sizeMd='2' >
                                <Link to={props.url || '#'} >
                                    <IonImg src={rootImages.UI.leftArrow} style={{ width: "25px", heigth: '25px' }} />
                                </Link>
                            </IonCol>
                            <IonCol sizeMd='10'></IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                {props.children}
            </IonContent>
        </IonPage>
    )
}

export default AppContainer
