import React from 'react';
import { BlueLoginBtn, FormCard, FormField, WhiteLoginBtn } from './Form.css';

const CreateFlow = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FormCard>
                <div>
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