import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { TooltipSearch, ToolTipText, ToolViewFooter, ToolViewFooter2 } from '../../styled-components';
import { ModalWindowContainer, ModalWindowContainer2 } from './ModalWindow.css';
const ModalWindow4 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <ModalWindowContainer2>
                <TooltipSearch>
                    <p>Search</p>
                    <BsX className='cross-icon' />
                </TooltipSearch>
                <ToolTipText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum has been the industry's
                </ToolTipText>
                <ToolViewFooter2>
                    <AiOutlineArrowLeft />
                    <AiOutlineArrowRight />
                </ToolViewFooter2>
            </ModalWindowContainer2>

        </div>
    );
};

export default ModalWindow4;