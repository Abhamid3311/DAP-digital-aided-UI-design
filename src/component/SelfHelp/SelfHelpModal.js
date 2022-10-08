import React from 'react';
import { BsX } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiFlowChart } from 'react-icons/ri';
import { BlueBorderLessBtn, BlueButton, WhiteBorderLessBtn, WhiteButton } from '../../styled-components';
import { SingleFlowContainer } from '../FlowManager/FlowManager.css';
import { SelfHelpModalContainer, SelfHelpModalHeader, SelfSingleRow, SelfSingleRowSearch } from './SelfHelp.css';




const SelfHelpModal = () => {
    return (
        <div>
            <SelfHelpModalContainer>
                <SelfHelpModalHeader>
                    <div>
                        <h2>Welcome, we're Digitization</h2>
                        <p className='help-header-text'>Here is quick selp help tab to solve your queries</p>
                    </div>
                    <BlueBorderLessBtn><BsX /></BlueBorderLessBtn>
                </SelfHelpModalHeader>


                <SingleFlowContainer>
                    <SelfSingleRowSearch>
                        <FiSearch />
                        <input type={"text"} placeholder="Search Flow" />
                    </SelfSingleRowSearch>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteBorderLessBtn><MdKeyboardArrowRight /></WhiteBorderLessBtn>
                    </SelfSingleRow>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteBorderLessBtn><MdKeyboardArrowRight /></WhiteBorderLessBtn>
                    </SelfSingleRow>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteBorderLessBtn><MdKeyboardArrowRight /></WhiteBorderLessBtn>
                    </SelfSingleRow>
                </SingleFlowContainer>
                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteBorderLessBtn><MdKeyboardArrowRight /></WhiteBorderLessBtn>
                    </SelfSingleRow>
                </SingleFlowContainer>
                

                


            </SelfHelpModalContainer>
        </div>
    );
};

export default SelfHelpModal;