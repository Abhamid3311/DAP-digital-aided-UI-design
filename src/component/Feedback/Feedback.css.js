import styled from "styled-components";
import { WhiteButton } from "../../styled-components";

export const FeedBackContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
background: #3742FA;
color:#FEFEFF;
border-radius: 8px;
width: 460px;
height:376px;

&>.feedback-body{
    padding:20px;
}
&> h4{
    text-align:center;
}

&> svg{
position:absolute;
right:0;
top:10px;
font-size:30px;
}
& .scale-msg{
width: 420px;
display: flex;
align-items: center;
justify-content: space-between;
font-size:12px;
}

& .feedback-box{
    font-size:14px;
    margin-bottom:20px
}

& .feedback-box>textarea{
    width:420px;
    height:66px;
    border-radius:8px;
    font-size:15px;
}
`;


export const FeedbackScale = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
padding: 6px 10px;
gap: 8px;

background-color:#FEFEFF;
color:#3742FA;
border-radius:8px;
`;

export const ScaleBtn = styled(WhiteButton)`
padding:10px;
transition:0.5s ease;

&:hover{
    background: #3742FA;
    color:#FEFEFF;
}
`;