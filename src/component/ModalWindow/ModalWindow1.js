import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { TooltipSearch, ToolTipText, ToolViewFooter } from '../../styled-components';
import { ModalWindowContainer } from './ModalWindow.css';



const ModalWindow1 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <ModalWindowContainer>
                <TooltipSearch>
                    <p>Search</p>
                    <BsX className='cross-icon' />
                </TooltipSearch>
                <ToolTipText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's
                </ToolTipText>
                <ToolViewFooter>
                    <AiOutlineArrowLeft />
                    <AiOutlineArrowRight />
                </ToolViewFooter>
            </ModalWindowContainer>
        </div>
    );
};

export default ModalWindow1;