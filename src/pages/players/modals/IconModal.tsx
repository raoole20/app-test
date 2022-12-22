import { useRef, useState, FormEvent, FC } from 'react'
import { IonLabel, IonInput, IonIcon, IonImg, IonContent, IonPopover } from '@ionic/react'

import { useDispatch } from 'react-redux'
import { rootImages } from '../../../app/core'
import { modalActions } from '../../../app/store/slices/modal'
import AppModal from '../../../app/components/AppModal'
import SmallBox from './SmallBox'
import { useSelector } from 'react-redux'
import { playerActions } from '../../../app/store/slices'




const IconModal: FC = () => {
    const popover = useRef<HTMLIonPopoverElement>(null);
    const valuesChange = useSelector( (state: any) => state.modal.payload)

    console.log(valuesChange)

    const inputRef: any = useRef()
    const dispatch = useDispatch()
    
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [input, setInput] = useState('')
    const [url, setUrl] = useState(valuesChange.player.icon)

    console.log(url !== valuesChange.player.icon)

    const [alertMsg, setAlertMsg] = useState({
        show: false,
        message: ''
    })

    const confirHandler = () => {
        dispatch(playerActions.updatePlayer({
            icon: url,
            name: input,
            position: valuesChange.player.position
        }))
        dispatch(modalActions.closeModal())
    }

    const changeURL = (url: string) => {
        setUrl(url)
    }

    

    //   icon: rootImages.images.emojis[randomEmoji as keyof typeof rootImages.images.emojis]


    const inputValues = (event: FormEvent<HTMLIonInputElement>) => {
      console.log(inputRef.current.value)
      setInput(inputRef.current.value)
      checkLogitud()
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

    const openPopover = (e:any) => {
        popover.current!.event = e;
        setPopoverOpen(true);
    }

    return (
        <AppModal size={true}>

            <header>
                <h4>Editar nomber</h4>
            </header>

            <div>
                {alertMsg.show && <IonLabel className='label-alert-modal'><IonIcon src={rootImages.UI.alert} />{alertMsg.message}</IonLabel>}
                <div className='modal-input-container icon'>
                    <div className='player-icons' onClick={openPopover}>
                        <IonIcon src={rootImages.UI.edit} className='icon-float-edit' />
                        <IonImg src={url} />
                        <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
                            <SmallBox  onChangeURL={changeURL} />
                        </IonPopover>
                    </div>

                    <IonInput
                        onInput={inputValues}
                        class='custom'
                        className='custom-input'
                        placeholder='nombre'
                        ref={inputRef}
                        onBlur={checkLogitud}
                    />
                </div>

                <button
                    className='app-btn_gerenic block success'
                    onClick={confirHandler}
                >Guardar</button>
            </div>
        </AppModal>
    )
}

export default IconModal