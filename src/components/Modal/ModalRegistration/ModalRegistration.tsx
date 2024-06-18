import React, { FC } from 'react';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { toggleVisLoginModal, toggleVisRegModal } from '../../../store/ModalsSlice';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { RegisterModalinputs } from '../../../types/inputs';
import { registerUser } from '../../../store/UserSlice';
import './ModalRegister.scss'
import RegisterForm from '../../Forms/RegisterForm/RegisterForm';

const ModalRegistration: FC = () => {

    const { isVisibleRegModal } = useAppSelector(state => state.modalsReducer);
    const dispatch = useAppDispatch();

    const modalClass = ['modal-register']

    if(isVisibleRegModal) {
        modalClass.push('show')
    }

    const closeModalHandler = () => {
        dispatch(toggleVisRegModal())
    }

    const loginModalHandler = () => {
        dispatch(toggleVisRegModal())
        dispatch(toggleVisLoginModal())
    }


    return (
        <div className={modalClass.join(' ')}>
            <div className="modal-register__content">
                <div onClick={closeModalHandler} className="modal-register__close">	&#x2716;</div>
                <div className="modal-register__header header-modal-register">
                    <div className="header-modal-register__title">Sign up</div>
                    <div className="header-modal-register__label">Registration takes less than a minute but gives you full control over your orders.</div>
                </div>
                <RegisterForm/>
                <div onClick={loginModalHandler} className="modal-register_log-in-ref">
                Already have an account? <a href="#">Sign in</a>
                </div>
            </div>  
        </div>
    );
};

export default ModalRegistration;