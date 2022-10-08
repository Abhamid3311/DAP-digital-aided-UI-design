import React from 'react';
import { BlueLoginBtn, FormCard, FormField, WhiteLoginBtn } from './Form.css';
import logo from '../../image/icon128.PNG';


const SignUp = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FormCard>
                <div className={"logo"}>
                    <img src={logo} style={{ width: "60px", height: "52px" }} alt="" />
                    <h2>Dijitization</h2>
                </div>
                <FormField>
                    <input type="email" placeholder='Enter email' />
                    <input type="password" placeholder='Enter password' />

                    <div>
                        <BlueLoginBtn>Login</BlueLoginBtn>
                        <WhiteLoginBtn>Cancel</WhiteLoginBtn>
                    </div>
                </FormField>

                <p>Already have an account? <a href="#" className='login-link'>Login</a></p>

                <div className='divider'>
                    <div></div> Or <div></div>
                </div>

                <WhiteLoginBtn>Continue with Google</WhiteLoginBtn>

            </FormCard>

        </div>
    );
};

export default SignUp;