import React from 'react';
import '../sign-in-and-sign-up/sign-in-and-sign-up.style.scss';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/Sign-up/sign-up.component';

const SiginAndSignupPage = () =>(
    <div className="sign-in-and-sign-up">
        <Signin/>
        <SignUp/>
    </div>
    
)

export default SiginAndSignupPage;
