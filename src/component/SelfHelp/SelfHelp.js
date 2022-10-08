import React from 'react';
import styled from 'styled-components';
import { BlueEditBtn } from '../../styled-components';
import SelfHelpModal from './SelfHelpModal';

const HelpContainer = styled.div`
position: relative;
`;

const HelpBtn = styled(BlueEditBtn)`
position:absolute;
top:400px;
right:-85px;
transform:rotate(-90deg);
`;



const SelfHelp = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <HelpContainer >
                <HelpBtn>Self Help </HelpBtn>
                <SelfHelpModal />
            </HelpContainer>
        </div>
    );
};

export default SelfHelp;