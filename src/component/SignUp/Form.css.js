import styled from "styled-components";
import { BlueEditBtn, WhiteEditBtn } from "../../styled-components";

export const FormCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
padding: 50px 50px;
gap: 10px;
width: 420px;
background: #FEFEFF;
color: #2B2E4A;
box-shadow: 0px 4px 10px rgba(43, 46, 74, 0.17);
border-radius: 16px;

& .divider{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 420px;
    gap:10px;
    margin:30px auto;
}
& .divider>div{
    height:1px;
    width:20%;
    background-color:#2B2E4A;
}
`;

export const FormField = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;


&>input{
    width: 364px;
    height: 30px;
    border: 2px solid #F0F0F0;
    border-radius: 8px;
    padding: 8px 20px;
}
& div{
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
}
`;

export const WhiteLoginBtn = styled(WhiteEditBtn)`
background: #FEFEFF;
width: 100%;
padding: 12px;
border:1px solid #2B2E4A;
`;

export const BlueLoginBtn = styled(BlueEditBtn)`
width: 100%;
padding: 12px;
`;
