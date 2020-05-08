import React from 'react';
import '../sign-in/sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
      event.preventDefault();
      const {email, password} = this.state;

      try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({email:'',password:''})
      }catch (error){
          console.log(error);
      }

    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]:value});
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                   
                    <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
                   <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                   </div>

                </form>
            </div>
        );
    }
}

export default Signin;