import { IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";
import { rootImages } from "../../app/core";
import AppContainer from "../../app/components/AppContainer";
import ListPlayer from "./PlayerLIst";

const Tab1: React.FC = () => {
  return (
    <AppContainer>
      <div className='app-container-header'>
        <IonGrid>
          <IonRow>
            <IonCol sizeMd='2'>
              <IonImg src={rootImages.UI.leftArrow} style={{ width: "25px", heigth: '25px' }} />
            </IonCol>
            <IonCol sizeMd='10'></IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <div className='app-container_contenido'>
        <header>
          <IonImg src={rootImages.images.jugadores} />
        </header>

        <ListPlayer/>

      </div>
    </AppContainer>
  );
};

export default Tab1;
