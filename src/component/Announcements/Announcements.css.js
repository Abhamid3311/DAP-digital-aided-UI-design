import styled from "styled-components";

export const AnnouncementsCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 20px;
gap: 15px;
width: 460px;
height: 246px;
background: #3742FA;
color:#fefefe;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`;

export const AnnouncementHeader = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;

& svg{
    font-size:20px;
}
`;