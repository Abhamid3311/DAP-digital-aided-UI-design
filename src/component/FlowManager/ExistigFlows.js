import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FlowBar, FlowContainer, SingleFlowContainer } from './FlowManager.css';
import { BlueButton, WhiteButton } from '../../styled-components';
import { BsX } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';



const ExistigFlows = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <FiSearch />
                        <input type={"text"} placeholder="Search Flow" />
                    </FlowBar>
                    <BlueButton><BsX /></BlueButton>
                </SingleFlowContainer>

                <h2>Existing Flows</h2>

                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                    </FlowBar>
                    <WhiteButton><MdKeyboardArrowLeft /></WhiteButton>
                </SingleFlowContainer>





            </FlowContainer>
        </div >
    );
};

export default ExistigFlows;