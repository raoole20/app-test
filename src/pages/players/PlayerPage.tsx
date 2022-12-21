import { IonImg } from "@ionic/react";
import { rootImages } from "../../app/core";
import AppContainer from "../../app/components/AppContainer";
import ListPlayer from "./PlayerLIst";

const Tab1: React.FC = () => {
  return (
    <AppContainer url="#">
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
