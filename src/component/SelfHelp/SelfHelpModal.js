import React from 'react';
import { BsX } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiFlowChart } from 'react-icons/ri';
import { BlueButton, WhiteButton } from '../../styled-components';
import { SingleFlowContainer } from '../FlowManager/FlowManager.css';
import { SelfHelpModalContainer, SelfHelpModalHeader, SelfSingleRow } from './SelfHelp.css';




const SelfHelpModal = () => {
    return (
        <div>
            <SelfHelpModalContainer>
                <SelfHelpModalHeader>
                    <div>
                        <h3>Welcome, we're Digitization</h3>
                        <p>Here is quick selp help tab to solve your queries</p>
                    </div>
                    <BlueButton><BsX /></BlueButton>
                </SelfHelpModalHeader>


                <SingleFlowContainer>
                    <SelfSingleRow>
                        <FiSearch />
                        <input type={"text"} placeholder="Search Flow" />
                    </SelfSingleRow>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteButton><MdKeyboardArrowRight /></WhiteButton>
                    </SelfSingleRow>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteButton><MdKeyboardArrowRight /></WhiteButton>
                    </SelfSingleRow>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteButton><MdKeyboardArrowRight /></WhiteButton>
                    </SelfSingleRow>
                </SingleFlowContainer>

                <SingleFlowContainer>
                    <SelfSingleRow>
                        <RiFlowChart className='flow-icon' />
                        <p>How to create change password flow</p>
                        <WhiteButton><MdKeyboardArrowRight /></WhiteButton>
                    </SelfSingleRow>
                </SingleFlowContainer>


            </SelfHelpModalContainer>
        </div>
    );
};

export default SelfHelpModal;