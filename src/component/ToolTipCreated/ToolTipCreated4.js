import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody2, ToolTipContainer2, ToolTipFooter2, TooltipSearch, ToolTipText, WhiteBorderLessBtn } from '../../styled-components';


const ToolTipCreated4 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <ToolTipContainer2>
                <ToolTipBody2>
                    <TooltipSearch>
                        <p>Search</p>
                        <BlueBorderLessBtn><BsX /></BlueBorderLessBtn>
                    </TooltipSearch>
                    <ToolTipText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, id? Aut iure omnis quaerat odit. Aut iure omnis quaerat odit.
                    </ToolTipText>
                </ToolTipBody2>

                <ToolTipFooter2>
                    <WhiteBorderLessBtn><AiOutlineArrowLeft /></WhiteBorderLessBtn>
                    <h5>STEP 2/3</h5>
                    <WhiteBorderLessBtn><AiOutlineArrowRight /></WhiteBorderLessBtn>
                </ToolTipFooter2>

            </ToolTipContainer2>
        </div>
    );
};

export default ToolTipCreated4;