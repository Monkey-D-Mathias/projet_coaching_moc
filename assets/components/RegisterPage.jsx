import React from 'react';
import FormRegister from './modules/FormRegister';
import NavBar from './modules/NavBar';

const RegisterPage = (props)=>{
    return (
        <div>
            <NavBar name="navbar-home"></NavBar>
            <FormRegister></FormRegister>
        </div>
    )
}
export default RegisterPage;
