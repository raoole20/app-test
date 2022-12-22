import {  IonIcon } from '@ionic/react'
import { FC } from 'react'

import { useDispatch } from 'react-redux'
import { rootImages } from '../core'
import { modalActions } from '../store/slices/modal'

interface ModalProps {
    children: JSX.Element[],
    size?: boolean
}

const AppModal: FC<ModalProps> = ({ children, size }) => {
    const dispatch = useDispatch()

    return (
        <div className='app-modal_display'>
            <div className={`modal-container ${size && 'small'} `}>
                <div className='circular-btn close-modal'onClick={()=> dispatch(modalActions.closeModal())}>
                    <IonIcon src={rootImages.UI.plus} />
                </div>

                { children }
            </div>
        </div>
    )
}

export default AppModal
