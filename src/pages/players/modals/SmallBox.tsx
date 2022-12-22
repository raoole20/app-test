import { IonButton, IonCol, IonGrid, IonIcon, IonImg, IonRow } from '@ionic/react'
import { rootImages } from '../../../app/core'

const SmallBox = ({ onChangeURL }: any) => {
  const keys = Object.entries(rootImages.images.emojis)

  const changeIonc = (value: string) => {
    onChangeURL(value)
  }

  return (
    <div className='small-box'>
        <header>
          <h6>Elige una imagen</h6>
        </header>

        <IonGrid>
            <IonRow>
              {
                keys.map( ([ key, value ], index) => {
                  return <IonCol key={index} sizeXs={'4'}  >
                    <IonImg src={value} onClick={() => changeIonc(value)}/>
                  </IonCol>
                })
              }
            </IonRow>
        </IonGrid>

        <footer>
          <IonButton expand="block" fill='clear' className='button-small-box'>
            <IonIcon src={rootImages.UI.photos} /> 
            Abrir fotos
          </IonButton>
        </footer>
    </div>
  )
}

export default SmallBox
