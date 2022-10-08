import React from 'react';
import { BlueLoginBtn, FormCard, FormField, WhiteLoginBtn } from './Form.css';
import logo from '../../image/icon128.PNG';

const CreateFlow = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FormCard>
                <div>
                    <img src={logo} style={{width:"60px",height:"52px"}} alt="" />
                    <h2>Dijitization</h2>
                </div>
                <FormField>
                    <input type="text" placeholder='Application name' />
                    <input type="text" placeholder='Flow use case..' />

                    <div>
                        <WhiteLoginBtn>Cancel</WhiteLoginBtn>
                        <BlueLoginBtn>Add</BlueLoginBtn>
                    </div>
                </FormField>

            </FormCard>
        </div>
    );
};

export default CreateFlow;