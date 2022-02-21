import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:120px;
border-top:1px solid #F4F4F4;
display:flex;
align-items:center; 
justify-content:space-between;
`

export const Wrapper = styled.div`
display:flex;
align-items:center; 

`

Container.Img = styled.img`
width: 80px;
height: 80px;
`
Container.T1 = styled.div`
font-style: normal;
font-weight: 700;
font-size: 22px;
color: #000000;
`

Container.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #8D8D8D;
`
Container.Btn = styled.div`
width: 35px;
height: 35px;
background: #FFFFFF;
display: flex;
align-items:center;
justify-content:center;
text-align:center;
border: ${({s})=>s ? '2px solid #FE5F1E' :'2px solid #D0D0D0'};
box-sizing: border-box;
border-radius:50%;
font-weight: 700;
font-size: 30px;
color: ${({s})=>s ? '#FE5F1E' :'#D0D0D0'};
transform: ${({s})=>s ? '' : 'rotate(45deg)'};
`
Container.TextCon = styled.div`
display: flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
width: 280px;
height: 54px;
margin:0 15px;
`