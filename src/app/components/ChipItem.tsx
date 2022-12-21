import { IonGrid, IonRow, IonCol } from '@ionic/react'
import { FC } from 'react'

interface ChipItemProps {
    players: string[],
    deletePlayer: (index: number) => void
}

const ChipItem: FC<ChipItemProps> = ({ players, deletePlayer }) => {

    return (
        <div className='container player-selected'>
            <IonGrid>
                <IonRow>
                    {
                        players.map((name, index) => (
                            <IonCol size='auto' key={index}>
                                <div className='player-selected' >
                                    <span>{name}</span>
                                    <span onClick={()=> deletePlayer(index)}>x</span>
                                </div>
                            </IonCol>
                        ))
                    }
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default ChipItem
