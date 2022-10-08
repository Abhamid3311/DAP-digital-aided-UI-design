import React from 'react';
import styled from 'styled-components';
import { BlueEditBtn, WhiteEditBtn } from '../../styled-components';

const FormCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
padding: 50px 40px;
gap: 40px;
width: 420px;
background: #FEFEFF;
color: #2B2E4A;
box-shadow: 0px 4px 10px rgba(43, 46, 74, 0.17);
border-radius: 16px;
`;

const FormField = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;


&>input{
    width: 364px;
    height: 45px;
    border: 2px solid #F0F0F0;
    border-radius: 8px;
    padding: 8px 20px;
}
& div{
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
}
`;

const WhiteLoginBtn = styled(WhiteEditBtn)`
background: #FEFEFF;
width: 100%;
padding: 15px;
border:1px solid #2B2E4A;
`;

const BlueLoginBtn = styled(BlueEditBtn)`
width: 100%;
padding: 15px;
`;




const SignUp = () => {
    return (
        <div>
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

                <p>Already have an account?  <a href="#">Login</a></p>

                <div></div> or <div></div>


                <WhiteLoginBtn>Continue with Google</WhiteLoginBtn>





            </FormCard>

        </div>
    );
};

export default SignUp;