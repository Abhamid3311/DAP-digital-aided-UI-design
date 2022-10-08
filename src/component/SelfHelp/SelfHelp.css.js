import styled from "styled-components";
import { FlowBar } from "../FlowManager/FlowManager.css";

export const SelfHelpModalContainer = styled.div`
position: relative;
width: 494px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
background-color:white;
border-radius:8px;
padding:10px 10px;
`;

export const SelfHelpModalHeader = styled.div`
position:relative;
top:-10px;
display:flex;
justify-content:space-between;
padding:10px;
align-items:center;
width:100%;
background-color:#3742FA;
color: #FEFEFF;
height: 100px;
border-radius:8px 8px 0 0;

&>div>.help-header-text{
    font-size:16PX;
    margin-top:-8px;
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

export const SelfSingleRowSearch = styled(SelfSingleRow)`
background-color:#FEFEFF;
border:3px solid #F9F9F9;
border-radius:10px;

height: 20px;
&>input{
    border:none;
    background-color:#FEFEFF;
}
`