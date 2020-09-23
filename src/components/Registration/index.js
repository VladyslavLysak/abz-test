import React, { useState } from 'react';

import { Form } from 'react-bootstrap';

import { createUserApi as createUser } from '../../api';

const Registration = (props) => {

    const [option, setOption] = useState(1);
    const [fileName, setFileName] = useState('Upload your photo');
    const [file, setFile] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        const formdata = new FormData();

        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("position_id", option);
        formdata.append("photo", file);

        try {
            await createUser(formdata)
            .then(res => {
                window.location.href = '/';
            });
        } catch (e) {
            console.log(e);
        }
    }

    const onRadioChange = (event) => {
        const { value } = event.target
        setOption(parseInt(value));
    }

    const onPhotoChange = (event) => {
        const file = event.target.files[0];
        try {
            setFileName(event.target.files[0].name);
        } catch (e) {
            console.log(e);
        }
        setFile(file);
    }

    return (
        <div className='registration-form-container' id='registration'>
            <div className='registration-form-text-container'>
                <h1>Register to get a work</h1>
                <h6>Attention! After successful registration and alert, update the list of users in the block from the top</h6>
                <Form className='registration-form' onSubmit={submitHandler}>
                    <Form.Group controlId='formGridName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='name' placeholder='Your name' onChange={event => {
                            const { value } = event.target
                            setName(value);
                        }} required />
                    </Form.Group>
                    <Form.Group controlId='formGridName'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Your email' onChange={event => {
                            const { value } = event.target
                            setEmail(value);
                        }} required />
                    </Form.Group>
                    <Form.Group controlId='formGridName'>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type='text' name='phone' placeholder='+380 XX XXX XX XX' onChange={event => {
                            const { value } = event.target
                            setPhone(value);
                        }} required />
                        <Form.Text className='text-muted'>
                            Enter phone number in open format
                    </Form.Text>
                    </Form.Group>
                    <div className='radio-buttons-container'>
                        <h6>Select your position</h6>
                        <label className='radio-container'>
                            <input type='radio' value={1} checked={option === 1} onChange={onRadioChange} />
                            <span className='checkmark'></span>
                            <p>Frontend developer</p>
                        </label>
                        <label className='radio-container'>
                            <input type='radio' value={2} checked={option === 2} onChange={onRadioChange} />
                            <span className='checkmark'></span>
                            <p>Backend developer</p>
                        </label>
                        <label className='radio-container'>
                            <input type='radio' value={3} checked={option === 3} onChange={onRadioChange} />
                            <span className='checkmark'></span>
                            <p>Designer</p>
                        </label>
                        <label className='radio-container'>
                            <input type='radio' value={4} checked={option === 4} onChange={onRadioChange} />
                            <span className='checkmark'></span>
                            <p>QA</p>
                        </label>
                    </div>
                    <div className='upload-photo-container'>
                        <h6>
                            Photo
                        </h6>
                        <div className='custom-file'>
                            <input type='file' className='custom-file-input' id='customFile' accept='.jpg' onChange={onPhotoChange} />
                            <label className='custom-file-label' htmlFor='customFile'>
                                {fileName}
                            </label>
                        </div>
                    </div>
                    <span className='submit-button-container center'>
                        <button
                            className='button'
                            type='submit'
                        >
                            Sign up now
                        </button>
                    </span>
                </Form>
            </div>
        </div>
    );
}


export default Registration;