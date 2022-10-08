import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody, TooltipSearch, ToolTipText, ToolTipViewContainer, ToolViewFooter, WhiteBorderLessBtn } from '../../styled-components';

const ToolTipView2 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <ToolTipViewContainer>

                <TooltipSearch>
                    <p>Search</p>
                    <WhiteBorderLessBtn><BsX /></WhiteBorderLessBtn>
                </TooltipSearch>

                <ToolTipBody>
                    <ToolTipText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, id. Eveniet expedita, repellat fugit dolore, mollitia quis sunt aliquid
                    </ToolTipText>

                    <div className='red-warning'>
                        <p className='red-text'>*Please click on the target to proceed</p>
                    </div>
                </ToolTipBody>



                <ToolViewFooter>
                    <BlueBorderLessBtn><AiOutlineArrowLeft /></BlueBorderLessBtn>
                    <BlueBorderLessBtn><AiOutlineArrowRight /></BlueBorderLessBtn>
                </ToolViewFooter>
            </ToolTipViewContainer>
        </div>
    );
};

export default ToolTipView2;