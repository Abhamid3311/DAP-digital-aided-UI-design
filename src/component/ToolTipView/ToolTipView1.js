import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDown } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { BlueBorderLessBtn, ToolTipBody, TooltipSearch, ToolTipText, ToolTipViewContainer, ToolViewFooter, WhiteBorderLessBtn } from '../../styled-components';


const ToolTipView1 = () => {
    return (
        <div style={{ marginTop: "70px" }}>
            <ToolTipViewContainer>

                <TooltipSearch>
                    <p>Search</p>
                    <WhiteBorderLessBtn><BsX /></WhiteBorderLessBtn>
                </TooltipSearch>
                <ToolTipBody>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas nobis aliquam animi voluptatum ipsam!
                    </ToolTipText>
                </ToolTipBody>


                <ToolViewFooter>
                    <BlueBorderLessBtn><AiOutlineArrowLeft /></BlueBorderLessBtn>
                    <BlueBorderLessBtn><AiOutlineArrowRight /></BlueBorderLessBtn>
                </ToolViewFooter>
            </ToolTipViewContainer>
        </div >
    );
};

export default ToolTipView1;