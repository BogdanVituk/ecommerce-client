import React from 'react';
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler  } from 'react-hook-form';
import { useAppDispatch } from '../../../types/storeFunc';

import { toggleVisRegModal } from '../../../store/ModalsSlice';

import { RegisterModalinputs } from '../../../types/inputs';
import { registerUser } from '../../../store/UserSlice';

const RegisterForm = () => {

    const dispatch = useAppDispatch();

    const {register, handleSubmit, reset, formState: { errors }} = useForm<RegisterModalinputs>({
        mode: 'onChange'
    });


    const onSubmit: SubmitHandler<RegisterModalinputs> = (data, e) => {
        dispatch(registerUser(data))
        dispatch(toggleVisRegModal())
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control {...register('name', { required: 'Field is required' })} type="name" placeholder="Your full name" />
            {errors?.name && <p>{errors.name.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register('email', { required: 'Enter your email', pattern: { value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u, message: 'Enter validation email' } })} type="email" placeholder="Your working email" />
            {errors?.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control {...register('password', { required: true })} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAvatar">
            <Form.Label>Link for avatar</Form.Label>
            <Form.Control  {...register('avatar', { required: true })} type="string"  placeholder="Avatar"  />
        </Form.Group>
        <button className="form_btn">Sign up</button>
    </Form>
    );
};

export default RegisterForm;