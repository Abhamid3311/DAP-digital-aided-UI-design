import styled from "styled-components";
import { FlowBar } from "../FlowManager/FlowManager.css";

export const FlowEditorCard = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
gap: 20px;
width: 347px;
height: 618px;
background: #F9F9F9;
border-radius: 8px;


&>.match-div{
    text-align:end;
    margin-top:10px;
}

&>.match-div>.match{
    padding:10px;
    margin-right:25px;
    border-radius:8px;
    color:#198754;
    width:120px;
    background-color:#F0F0F0;
}
&>.check-box{
    background-color:#FEFEFF;
    font-size:18px;
    padding:10px;
    border-radius:8px;
    width:100px;
}

&>.check-box>input{
    font-size:20px;
    margin-right:8px;
}
`;

export const EditorBar = styled(FlowBar)`
width:299px;
`;

export const FlowbarWarning = styled(EditorBar)`
height:84px;
justify-content:space-between;

& svg{
    font-size:40px;
    margin-right:10px;
}

&>p{
    text-align:start;
}
`;