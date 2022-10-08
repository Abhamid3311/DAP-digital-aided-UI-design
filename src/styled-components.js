const { default: styled } = require("styled-components");

//Parent Container
export const ToolTipContainer = styled.div`
width: 382px;
height: 210px;
background:#f9f9f9;
border-radius: 8px;
position:relative;

&:before{
content:"";
position:absolute;
width:1rem;
height:1rem;
top:-0.5rem;
left:2rem;
background-color:inherit;
transform:rotate(45deg);
}
`;

export const ToolTipContainer2 = styled(ToolTipContainer)`
background-color:#3742FA;
`;

export const ToolTipViewContainer = styled(ToolTipContainer)`
height: 285px;
`;
export const ToolTipViewContainer2 = styled(ToolTipContainer2)`
height: 258px;
`;




//Tool Tip Body

export const ToolTipBody = styled.div`
color:#999999;

&>select{
  position: relative;
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 4px;
  border:1px solid #FEFEFF;
  padding: 12px 20px;
  transition: box-shadow 0.07s;
  background-color: #FEFEFF;
  color: black;
  margin-top:20px;
  margin-left:18px;
}


&>.red-warning{
    position: relative;
    display: flex;
    border-radius: 4px;
    text-align:center;
    width: 90%;
    border: 1px solid #F9DEDC;
    font-size:15px;
    transition: box-shadow 0.07s;
    background-color: #F9DEDC;
    color: #B3261E;
    margin-left:18px;
   
}

&>.red-warning>.red-text{
    margin-left:38px;
}
`;

export const ToolTipBody2 = styled(ToolTipBody)`
color:#FEFEFF;
`;


export const TooltipSearch = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:17px;
    padding: 2px 20px;
    &>button{
        margin-right:-20px
    }
    &>button>svg{
    font-size:28px;
    
}
`;

export const ToolTipText = styled.p`
font-size:15px;
padding:0 20px;

`;


//Tool Tip Footer

export const ToolTipFooter = styled.div`
position:absolute;
bottom:0;
height:56px;
Width:100%;

display:flex;
justify-content:space-between;
align-items:center;
border-radius:0px 0px 8px 8px;
font-weight:800;

background-color:#3742FA;
color:#fefefe;
`;

export const ToolTipFooter2 = styled(ToolTipFooter)`
background-color:#ffffff;
color:black;
`;

export const ToolViewFooter = styled(ToolTipFooter)`
justify-content:space-between;
&>svg{
    padding:0px 30px;
}
&>button{
    margin:0px 20px;
}
&>h5{
    margin:0px 25px;
}
`;

export const ToolViewFooter2 = styled(ToolViewFooter)`
background-color:#ffffff;
color:black;
`;


export const WhiteButton = styled.button`
padding:10px 25px;
background-color:#ffffff;
color: #2C2C2C;
border:1px solid #EBEBEB;
border-radius:8px;
cursor:pointer;

& svg{
    font-size:20px;
    padding:5px 0px;
    
}

`;

export const BlueButton = styled(WhiteButton)`
background-color:#3742FA;
color: #FEFEFF;
`;

export const BlueBorderLessBtn = styled(BlueButton)`
border:none;
`;

export const WhiteBorderLessBtn = styled(WhiteButton)`
border:none;
background-color:#F9F9F9;;
`;

export const WhiteEditBtn = styled(WhiteButton)`
padding:15px 45px;
font-size:17px;
font-weight:700;

`;

export const BlueEditBtn = styled(BlueButton)`
padding:15px 45px;
font-size:17px;
font-weight:700;
`;


