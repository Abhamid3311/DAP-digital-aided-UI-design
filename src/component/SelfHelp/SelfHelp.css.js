import styled from "styled-components";
import { FlowBar } from "../FlowManager/FlowManager.css";

export const SelfHelpModalContainer = styled.div`
position: relative;
width: 494px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
background-color:white;
border-radius:8px;
`;

export const SelfHelpModalHeader = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
background-color:#3742FA;
color: #FEFEFF;
height: 100px;
border-radius:8px 8px 0 0;

 &>svg{
font-size:28px;
}
`;

export const SelfSingleRow = styled(FlowBar)`
justify-content:space-between;
width: 446px;
height: 40px;
border:0;
background-color:#F9F9F9;
margin-bottom:10px;

&>.flow-icon{
    color:#3742FA;
}
`;