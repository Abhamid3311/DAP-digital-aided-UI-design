import React from 'react';
import { BlueLoginBtn, FormCard, FormField, WhiteLoginBtn } from './Form.css';





const SignUp = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FormCard>
                <div>
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

                <p>Already have an account? <a href="#">Login</a></p>

                <div className='divider'>
                    <div></div> Or <div></div>
                </div>


                <WhiteLoginBtn>Continue with Google</WhiteLoginBtn>



            </FormCard>

        </div>
    );
};

export default SignUp;