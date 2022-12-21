import { FC } from "react"
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react"
import { PlayerInterface } from "../../app/core"

interface ItemProps {
  players: PlayerInterface[]
}

const PlayerItem: FC<ItemProps> = ({ players }) => {
  return (
    <div className="player-display">
      <IonGrid>

        {
          players.map((player, index) => (
            <IonRow key={index}>
              <IonCol sizeXs="2" className="player-display_options"><span>{player.position}</span></IonCol>
              <IonCol sizeXs="8">
                <div className="player-display_description">
                  <IonImg src={player.icon} />
                  <p>{player.name}</p>
                </div>
              </IonCol>
              <IonCol sizeXs="2" className="player-display_options">
                <span>x</span>
              </IonCol>
            </IonRow>
          ))
        }
      </IonGrid>
    </div>
  )
}

export default PlayerItem
