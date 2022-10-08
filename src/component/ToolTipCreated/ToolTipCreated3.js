import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody, ToolTipContainer, TooltipSearch, ToolTipText, ToolViewFooter, WhiteBorderLessBtn } from '../../styled-components';

const ToolTipCreated3 = () => {
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

                <ToolViewFooter>
                    <BlueBorderLessBtn><AiOutlineArrowLeft /></BlueBorderLessBtn>
                    <h5>STEP 3/3</h5>
                </ToolViewFooter>
            </ToolTipContainer>
        </div>
    );
};

export default ToolTipCreated3;