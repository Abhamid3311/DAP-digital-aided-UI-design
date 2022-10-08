import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import styled from 'styled-components';
import { BlueBorderLessBtn, WhiteBorderLessBtn } from '../../styled-components';

const PopupCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

padding: 20px;
gap: 25px;
width: 408px;
height: 123px;
background: #F9F9F9;
border-radius: 10px;

&>.popup-msg{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #2B2E4A;
}
&>.popup-msg>svg{
    font-size:22px;
    margin-right:10px;
}
&>.popup-btns{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
`

const Popup = () => {
    return (
        <div>
            <PopupCard>
                <div className='popup-msg'>
                    <AiOutlineWarning />
                    <p>Tooltip appears to be on different page proceed:-</p>
                </div>

                <div className='popup-btns'>
                    <WhiteBorderLessBtn>Cancel</WhiteBorderLessBtn>
                    <BlueBorderLessBtn>Ok</BlueBorderLessBtn>
                </div>
            </PopupCard>
        </div>
    );
};

export default Popup;