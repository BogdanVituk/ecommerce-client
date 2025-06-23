import React from 'react';

import { Form, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../../types/storeFunc';

import { loginUser } from '../../../store/UserSlice';
import { LoginModalFormInputs } from '../../../types/inputs';
import { SubmitHandler, useForm } from 'react-hook-form';

import { toggleVisLoginModal } from '../../../store/ModalsSlice';

const LoginForm = () => {

    const { register, handleSubmit, reset } = useForm<LoginModalFormInputs>({
        mode: 'onChange'
    });

    const dispatch = useAppDispatch();
    
    const onSubmit: SubmitHandler<LoginModalFormInputs> = (data) => {
        dispatch(loginUser(data))
       
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...register('email', { required: true })} type="email" placeholder="Enter email" />           
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register('password', { required: true })} type="password" placeholder="Enter password" />
                    </Form.Group>
                    <button className='modal-login__btn'>Submit</button>
                </Form>
    );
};

export default LoginForm;