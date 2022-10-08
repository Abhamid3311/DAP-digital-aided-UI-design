import styled from "styled-components";

export const FlowContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px 16px;
gap: 10px;
width: 412px;
background: #F9F9F9;
border-radius: 8px;
`;


export const FlowBar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
width: 320px;
height: 35px;
background: #FEFEFF;
border: 1px solid #EBEBEB;
border-radius: 8px;
text-align:center;

&>input{
  position: relative;
  display: flex;
  border-radius: 4px;
  align-items: center;
  width: 100%;
  border: 1px solid #EBEBEB;
  padding: 8px 30px;
  transition: box-shadow 0.07s;
  background-color: white;
  color: black;
 
}
& svg{
    font-size:20px
}
`;

export const SingleFlowContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;


`;