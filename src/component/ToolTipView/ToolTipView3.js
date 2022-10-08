import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDown } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody2, TooltipSearch, ToolTipText, ToolTipViewContainer2, ToolViewFooter2, WhiteBorderLessBtn } from '../../styled-components';


const ToolTipView3 = () => {
    return (
        <div style={{ marginTop: "70px" }}>
            <ToolTipViewContainer2>
                <TooltipSearch>
                    <p>Search</p>
                    <BlueBorderLessBtn><BsX /></BlueBorderLessBtn>
                </TooltipSearch>
                <ToolTipBody2>
                    <select name="" id="">
                        <option value="" selected disabled>
                            <div>
                                <p>Select</p>
                                <AiOutlineDown />
                            </div>
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <ToolTipText>
                        Enter Description..
                    </ToolTipText>
                </ToolTipBody2>


                <ToolViewFooter2>
                    <WhiteBorderLessBtn><AiOutlineArrowLeft /></WhiteBorderLessBtn>
                    <WhiteBorderLessBtn><AiOutlineArrowRight /></WhiteBorderLessBtn>
                </ToolViewFooter2>
            </ToolTipViewContainer2>
        </div >
    );
};

export default ToolTipView3;