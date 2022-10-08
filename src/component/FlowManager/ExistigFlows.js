import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FlowBar, FlowContainer, SearchBar, SearchBarBtn, SingleFlowContainer } from './FlowManager.css';
import { WhiteBorderLessFlowBtn } from '../../styled-components';
import { BsX } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';



const ExistigFlows = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FlowContainer>

                <SingleFlowContainer>
                    <SearchBar>
                        <FiSearch />
                        <input type={"text"} placeholder="Search Flow" />
                    </SearchBar>
                    <SearchBarBtn><BsX /></SearchBarBtn>
                </SingleFlowContainer>


                <h2>Existing Flows</h2>

                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <FlowBar>
                        <p>XYZ_Flow_1 </p>
                        <WhiteBorderLessFlowBtn>
                            <MdKeyboardArrowLeft />
                        </WhiteBorderLessFlowBtn>
                    </FlowBar>
                </SingleFlowContainer>

            </FlowContainer>
        </div >
    );
};

export default ExistigFlows;