import React from 'react';
import "./main.css";
import BtnForm from '../BtnForm/'
import Form from '../Form/'
import Btn from '../../../../../Components/Btn'
function FormBox() {


    return (
        <div className="formbox" >   
            <h2 className="formbox__title">30 Day Free Trial</h2>
            <p className="formbox__description">Sign up now, it only takes 3 minutes</p>
            <div className="formbox__btn--wrapper">
                <BtnForm
                className='fa fa-google'
                title='Sign up with Google'
                style={{backgroundColor: '#c83227'}}
                />
                <BtnForm
                className='fa fa-facebook'
                title='Sign up with Facebook'
                style={{backgroundColor: '#3b5998'}}
                />
            </div>
            <div className='formbox__devide'>
                <span className="formbox__devide--text">OR</span>
            </div>
            <form action="" method="POST" class="form" id="form-1">
                <Form/>
                <Form/>
                <Form/>
                <Form/>
            </form>
            <p className='formbox__description'>By signing up, you agree to our terms of services and privacy policy.</p>
            <Btn
                title='Start Your Free Trial'
            />
            <p className='formbox__login'>Already have an account? <a className='' href=''>Login</a></p>
        </div>
    )
};

export default FormBox;