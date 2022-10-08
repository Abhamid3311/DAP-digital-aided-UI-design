import styled from "styled-components";
import { BlueBorderLessBtn } from "../../styled-components";

export const FlowContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 16px;
gap: 10px;
width: 412px;
background: #F9F9F9;
border-radius: 8px;
`;


export const FlowBar = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding: 10px;
width: 380px;
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
  border:none;
  padding: 8px 30px;
  transition: box-shadow 0.07s;
  background-color: white;
  color: black;
 
}
& svg{
    font-size:30px
}
`;

export const SearchBar = styled(FlowBar)`
width: 320px;
`;

export const SearchBarBtn = styled(BlueBorderLessBtn)`
padding:8px;
margin-left:6px;

&>svg{
  font-size:35px;
  padding:0px;
}
`;

export const SingleFlowContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;

`;


