import { useDispatch, useSelector } from "react-redux";
import { IonIcon } from "@ionic/react"
import { add, alertCircleOutline } from "ionicons/icons";

import { PlayerInterface, rootImages } from "../../app/core";
import PlayerItem from "./PlayerItem";
import AppModal from "../../app/components/AppModal";
import { modalActions } from "../../app/store/slices/modal";


const ListPlayer = () => {
  const players: PlayerInterface[] = useSelector((state: any) => state.player.players)
  const showModal: boolean = useSelector((state: any) => state.modal.open)
  const dispatch = useDispatch()

  const opnenModelHandler = () => {
    dispatch(modalActions.openModal())
  }

  return (
    <>

      { showModal && <AppModal  />}
      <div className="app-container_seccion">
        <div className="container-player">

          <div className={`message-player ${players.length && 'start-item'}`} style={{ flex: '1 0 80%' }}>

            {
              players.length ? <PlayerItem players={players} /> : (
                <div className="alert-msg" >
                  <IonIcon src={alertCircleOutline} className='alert-icon' />
                  <p>No hay jugadores aún</p>
                </div>)
            }
            <div className="add-player" onClick={opnenModelHandler}>
              <IonIcon src={add}></IonIcon>
              <p>Agregar jugador</p>
            </div>
          </div>

          {!players.length && <div style={{ flex: '0 0 10%' }}>
            <button className="app-btn_gerenic orange block align-end"><IonIcon src={rootImages.UI.reload} />Historial de jugadores</button>
          </div>
          }
        </div>
      </div>

      <button disabled={ players.length === 0 } onClick={() => console.log('holi')} className="app-btn_gerenic blue app-smal-shadow size-md ">CONFIRMAR</button>
    </>
  )
}

export default ListPlayer
