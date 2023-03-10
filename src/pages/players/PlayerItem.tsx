import { FC } from "react"
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react"
import { PlayerInterface } from "../../app/core"
import { useDispatch } from "react-redux"
import { playerActions } from "../../app/store/slices"
import { modalActions } from "../../app/store/slices/modal"

interface ItemProps {
  players: PlayerInterface[]
}

const PlayerItem: FC<ItemProps> = ({ players }) => {
  const dispatch = useDispatch()

  const removePlayer = (index: number) => {
    dispatch(playerActions.removePlayer(index))
  }

  const openModal = ( player: any) => {
    dispatch(modalActions.openIconModal({ player }))
  }

  return (
    <div className="player-display">
      <IonGrid>

        {
          players.map((player, index) => (
            <IonRow key={index}>
              <IonCol sizeXs="2" className="player-display_options"><span>{player.position}</span></IonCol>
              <IonCol sizeXs="8">
                <div className="player-display_description">
                  <IonImg src={player.icon} onClick={() => openModal(player)} />
                  <p>{player.name}</p>
                </div>
              </IonCol>
              <IonCol sizeXs="2" className="player-display_options">
                <span onClick={()=> removePlayer(index)}>x</span>
              </IonCol>
            </IonRow>
          ))
        }
      </IonGrid>
    </div>
  )
}

export default PlayerItem
