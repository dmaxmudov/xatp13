import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import Profile from '../xapt13Page/Profile'
import SignUp from './SignUp';
import {toast} from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate()

    const submitBtn = (event, error, value) => {
      axios.post('https://api.xatp13.botdev.uz/api/auth/register', value)
        .then((res) => {
          toast.success(res.data.message);
          navigate('/profile')
        })
        .catch((err) => {
          toast.error("Malumotlar noto'g'ri to'ldirilgan")
        })
    }
    return (
        <>
    
        <div className="App vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <h5 className='text-center'>Get started</h5>
                        <p className='text-secondary text-center'>Start creating the best possible user experience for you customers.</p>
                        
                        <div className="card">
                            <div className="card-body px-5 py-5">

                                <AvForm onSubmit={submitBtn}>
                                    <AvField 
                                    name='name'
                                    label='Enter name'
                                    className='form-control form-label'
                                    type='text'
                                    />

                                    <AvField 
                                    name='email'
                                    label='Enter email'
                                    className='form-control mt-2'
                                    type='email'
                                    />

                                    <AvField 
                                    name='password'
                                    label='Enter password'
                                    className='form-control mt-2'
                                    type='password'
                                    />

                                    <AvField 
                                    name='password_confirmation'
                                    label='Repeact password'
                                    className='form-control mt-2'
                                    type='password'
                                    />
                            
                                    <button className="btn btn-primary d-block mx-auto mt-3" type='submit'>Sign up</button>

                                </AvForm>

                                <Link className='text-center mt-2' to='/sign-up'>
                                    Already have account
                                </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
        </>
    )
}

export default SignIn
