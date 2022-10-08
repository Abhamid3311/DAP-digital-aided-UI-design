import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { ToolTipBody, ToolTipContainer, ToolTipFooter2, TooltipSearch, ToolTipText, WhiteBorderLessBtn } from '../../styled-components';

const ToolTipCreated2 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
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

                <ToolTipFooter2>
                    <WhiteBorderLessBtn><AiOutlineArrowLeft /></WhiteBorderLessBtn>
                    <h5>STEP 2/3</h5>
                    <WhiteBorderLessBtn><AiOutlineArrowRight /></WhiteBorderLessBtn>
                </ToolTipFooter2>
            </ToolTipContainer>
        </div>
    );
};

export default ToolTipCreated2;