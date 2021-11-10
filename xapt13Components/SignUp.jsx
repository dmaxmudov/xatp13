import { AvForm, AvField } from 'availity-reactstrap-validation'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const SignUp = () => {

    const navigate = useNavigate()

    const handleClick = (event, error, value) => {
        axios.post('https://api.xatp13.botdev.uz/api/auth/login', value)
            .then((res) => {
                toast.success(res.data.status);
                navigate('/profile')
            })
            .catch((err) => {
                toast.error('Error!!!')
            })
    }

    return (
        <>
        <div className="signup vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto">

                        <h4 className="text-center mb-2">XATP13 Ishlab chiqarish tizimi</h4>
                        <p className="text-center text-secondary">Login va parolni terib kiring</p>
                        <div className="card">
                            <div className="card-body px-5 py-5">

                                <div className='boy text-center'>
                                    <img src="/assets/image/bigMan.jpg" className='img-fluid rounded-circle' alt=""/>
                                </div>

                                <AvForm
                                    onSubmit={handleClick}
                                >
                                    <AvField
                                        name='email'
                                        type='email'
                                        label='Enter email'
                                        className='form-control mt-3'
                                    />

                                    <AvField
                                        name='password'
                                        type='password'
                                        label='Enter password'
                                        className='form-control mt-3'
                                    />

                                    <input type="checkbox" id='check'/>
                                    <label htmlFor="check" className='mx-2'>Remember me</label>

                                    <button className="btn btn-primary d-block mx-auto mt-2" type='submit'>Sign in</button>
                                </AvForm>

                                <Link className='text-center mt-2' to='/sign-in'>
                                    Create new profile
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

export default SignUp
