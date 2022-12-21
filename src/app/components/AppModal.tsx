import {  useRef, useState, FormEvent } from 'react'
import {  IonLabel, IonInput, IonIcon } from '@ionic/react'

import { useDispatch } from 'react-redux'
import { rootImages } from '../core'
import { modalActions } from '../store/slices/modal'
import ChipItem from './ChipItem'
import { playerActions } from '../store/slices'

const AppModal = () => {
    const inputRef: any = useRef()
    const dispatch = useDispatch()

    const [players, setPlayers] = useState<string[]>([])
    const [isValid, setIsValid] = useState(true)
    const [alertMsg, setAlertMsg] = useState({
        show: false,
        message: ''
    })

    const confirHandler = () => {
        dispatch(playerActions.addPlayer(players))
        dispatch(modalActions.closeModal())
    }
 
    function deletePlayer (id: number): void {
        setPlayers(players.filter( (player,index) => index !== id))
    }

    const addPlayer = () => {
        const name = inputRef.current.value
        setPlayers( state => [
            ...state,
            name
        ])
        setIsValid(true)
        inputRef.current.value = ''
    }

    const inputValues = (event: FormEvent<HTMLIonInputElement> ) => {
        if( inputRef.current.value.length > 3 && isValid && inputRef.current.value.length < 12) {
            setIsValid(false)
        }else if( inputRef.current.value.length < 3) {
            setIsValid(true)
        }else if( inputRef.current.value.length >= 12) {
            setIsValid(true)
            setAlertMsg({
                show: true,
                message: 'max 12 carácteres'
            })

            setTimeout(()=> {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
        }
    }

    const checkLogitud = () => {
        if(inputRef.current.value.length === 0 ) {
            setAlertMsg({
                show: true,
                message: 'Ingresa un nombre'
            })

            setTimeout(()=> {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
            return
        }

        if(inputRef.current.value.length <= 3 ) {
            setAlertMsg({
                show: true,
                message: 'min 4 carácteres'
            })

            setTimeout(()=> {
                setAlertMsg({
                    show: false,
                    message: ''
                })
            }, 3000)
        }
    }

    return (
        <div className='app-modal_display'>

            <div className='modal-container'>
                <div className='circular-btn close-modal'onClick={()=> dispatch(modalActions.closeModal())}>
                    <IonIcon src={rootImages.UI.plus} />
                </div>

                <header>
                    <h4>Agrega Jugadores</h4>
                </header>

                <ChipItem players={players} deletePlayer={deletePlayer}/>

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
                        <button 
                            className='add-player-btn' 
                            disabled={isValid}
                            onClick={(event) => addPlayer()}
                            >+</button>
                    </div>

                    <button 
                        disabled={players.length === 0} 
                        className='app-btn_gerenic block success'
                        onClick={confirHandler}
                        >Confirmar</button>
                </div>
            </div>

        </div>
    )
}

export default AppModal