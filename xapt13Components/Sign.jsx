import React from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
    return (
        <>
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <Link to='/sign-in'>
                <button className="btn btn-secondary ">Sign in</button>  
            </Link> 
            <Link to='sign-up'>
                <button className="btn btn-success mx-2">Sign up</button> 
            </Link>
        </div>  
        </>
    )
}

export default Sign
