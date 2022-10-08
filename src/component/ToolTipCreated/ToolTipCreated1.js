import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody, ToolTipContainer, ToolTipFooter, TooltipSearch, ToolTipText, WhiteBorderLessBtn } from '../../styled-components';



const ToolTipCreated1 = () => {
    return (
        <div>
            <ToolTipContainer>
                <ToolTipBody>
                    <TooltipSearch>
                        <p>Search</p>
                        <WhiteBorderLessBtn><BsX /></WhiteBorderLessBtn>
                    </TooltipSearch>
                    <ToolTipText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                    </ToolTipText>
                </ToolTipBody>

                <ToolTipFooter>
                    <BlueBorderLessBtn><AiOutlineArrowLeft /></BlueBorderLessBtn>
                    <h5>STEP 2/3</h5>
                    <BlueBorderLessBtn><AiOutlineArrowRight /></BlueBorderLessBtn>
                </ToolTipFooter>
            </ToolTipContainer>
        </div>
    );
};

export default ToolTipCreated1;