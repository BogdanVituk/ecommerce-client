import React, { FC } from 'react';
import './ModalLogin.scss';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { toggleVisLoginModal } from '../../../store/ModalsSlice';

import LoginForm from '../../Forms/LoginForm/LoginForm';

const ModalLogin: FC = () => {

    const visibleModal = useAppSelector(state => state.modalsReducer.isVisibleLoginModal)

    const dispatch = useAppDispatch();

    const modalClass = ['modal-login']

    if(visibleModal) {
        modalClass.push('active')
    }
    const closeModalHandler = () => {
        dispatch(toggleVisLoginModal())
    }

    return (
        <div className={modalClass.join(' ')}>
            <div className="modal-login__content">
                <div onClick={closeModalHandler} className="modal-register__close">	&#x2716;</div>
                <div className="modal-login__title">Sign-in</div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default ModalLogin;