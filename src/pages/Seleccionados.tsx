import { IonIcon, IonImg, useIonAlert } from "@ionic/react";
import { add } from "ionicons/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AppContainer from "../app/components/AppContainer";
import { PlayerInterface, rootImages } from "../app/core";
import { modalActions } from "../app/store/slices/modal";
import PlayerItem from "./players/PlayerItem";
import  ConfirmModal  from './players/modals/PlayerModal'

const Tab3: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const history = useHistory()
  
  const players: PlayerInterface[] = useSelector((state: any) => state.player.players)
  const showConfirmModal: boolean  = useSelector((state: any) => state.modal.showConfirm)
  const showModal: boolean = useSelector((state: any) => state.modal.open)
  const dispatch = useDispatch()

  const opnenModelHandler = () => {
    dispatch(modalActions.openModal())
  }

  const savedHandle = async () => {
    await presentAlert({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
      onWillDismiss: () => {
        console.log(players)
        localStorage.setItem('players', JSON.stringify(players))
        history.push('/')
      }
    })
  }
  return (
    <AppContainer noURL={true}>
      <div className='app-container_contenido'>

        <header style={{ position: 'relative', top: '35px'}}>
          <IonImg src={rootImages.images.jugadores} />
        </header>

        {showModal && <ConfirmModal isConfirm={false} text="Confirmar" />}
        {showConfirmModal && <ConfirmModal isConfirm={true} text="A jugar!" />}
        <div className="app-container_seccion">
          <div className="container-player">

            <div className={`message-player ${'start-item'}`} style={{ flex: '1 0 80%' }}>
              <PlayerItem players={players}  />
              
              <div className="add-player" onClick={opnenModelHandler}>
                <IonIcon src={add}></IonIcon>
                <p>Agregar jugador</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/history" style={{ textDecoration: 'none' }}>
          <button className="app-btn_gerenic white app-smal-shadow size-md ">PARTIDAS ANTERIORES</button>
        </Link>

        <button disabled={players.length === 0} className="app-btn_gerenic blue app-smal-shadow size-md" onClick={savedHandle}>CONFIRMAR</button>

      </div>
    </AppContainer>
  );
};

export default Tab3;
