import { useRef, useState, FormEvent, FC } from 'react'
import { IonLabel, IonInput, IonIcon, IonImg } from '@ionic/react'

import { useDispatch } from 'react-redux'
import { rootImages } from '../../../app/core'
import { playerActions } from '../../../app/store/slices'
import { modalActions } from '../../../app/store/slices/modal'
import AppModal from '../../../app/components/AppModal'
import ChipItem from '../../../app/components/ChipItem'
import { useHistory } from 'react-router'


interface PlayerModalInterface {
    isConfirm: boolean,
    text: string
}

const PlayerModal: FC<PlayerModalInterface> = ({ isConfirm, text }) => {
    const history = useHistory()
    const inputRef: any = useRef()
    const dispatch = useDispatch()

    const [players, setPlayers] = useState<string[]>([])
    const [confirm, setConfirm] = useState(true)
    const [isValid, setIsValid] = useState(true)
    const [alertMsg, setAlertMsg] = useState({
        show: false,
        message: ''
    })

    const confirHandler = () => {
        dispatch(playerActions.addPlayer(players))
        dispatch(modalActions.closeModal())
    }

    function deletePlayer(id: number): void {
        setPlayers(players.filter((player, index) => index !== id))
    }

    const addPlayer = () => {
        const name = inputRef.current.value
        setPlayers(state => [
            ...state,
            name
        ])
        setIsValid(true)
        inputRef.current.value = ''
    }

    const savedHandle = () => {
        dispatch(modalActions.closeModal())
        console.log(players)
        localStorage.setItem('players', JSON.stringify(players))
        history.push("/seleccionados")
    }

    const inputValues = (event: FormEvent<HTMLIonInputElement>) => {
        if (inputRef.current.value.length > 3 && (isValid || confirm ) && inputRef.current.value.length < 12) {
            setIsValid(false)
        } else if (inputRef.current.value.length < 3) {
            setConfirm(true)
            setIsValid(true)

        } else if (inputRef.current.value.length >= 12) {
            setIsValid(true)
            setConfirm(true)

            setAlertMsg({
                show: true,
                message: 'max 12 carácteres'
            })

            setTimeout(() => {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
        }
    }

    const checkLogitud = () => {
        if (inputRef.current.value.length === 0) {
            setAlertMsg({
                show: true,
                message: 'Ingresa un nombre'
            })

            setTimeout(() => {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
            return
        }

        if (inputRef.current.value.length <= 3) {
            setAlertMsg({
                show: true,
                message: 'min 4 carácteres'
            })

            setTimeout(() => {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
        }
    }

    const TakeAPhotos: JSX.Element | null = isConfirm ? (
        <div className='agregar-foto-contenedor'>
            <IonImg style={{ width: '80px', height: '80px' }} src={rootImages.images.grup} />
            <span><IonIcon src={rootImages.images.camera} /> Agregar Foto</span>
        </div>) : null

    return (
        <AppModal>

            <header>
                {TakeAPhotos}
                <h4>Nombre Evento</h4>
            </header>

            <div>
                {
                    (!isConfirm) && <ChipItem
                        players={players}
                        deletePlayer={deletePlayer}
                    />
                }
            </div>

            <div>
                {alertMsg.show && <IonLabel className='label-alert-modal'><IonIcon src={rootImages.UI.alert} />{alertMsg.message}</IonLabel>}
                <div className='modal-input-container'>
                    <IonInput
                        onInput={inputValues}
                        class='custom'
                        className='custom-input'
                        placeholder='nombre'
                        ref={inputRef}
                        onBlur={checkLogitud}
                    />
                    {
                        !isConfirm && <button
                            className='add-player-btn'
                            disabled={isValid}
                            onClick={(event) => addPlayer()}
                        >+</button>
                    }

                </div>

                { !isConfirm ? <button
                    disabled={players.length === 0}
                    className='app-btn_gerenic block success'
                    onClick={confirHandler}
                >{text}</button> : <button
                    disabled={false}
                    className='app-btn_gerenic block success'
                    onClick={savedHandle}
                >{text}</button>}
            </div>
        </AppModal>
    )
}

export default PlayerModal