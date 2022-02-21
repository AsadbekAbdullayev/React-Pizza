import styled from "styled-components"

export const Container = styled.div`
width:100%;
height:50px;
margin:40px 0;
display: flex;
align-items:center;
`
Container.Btn = styled.button`
height: 46px;
background: ${({H})=>H ? ' #2C2C2C':'#F9F9F9' } ;
border-radius: 30px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 0.015em;
color:${({H})=>H ? '#fff':'#2C2C2C' };
border:none;
padding:10px 20px;
margin:0 16px 0 0;
:hover{
color:#fff;
background: #2C2C2C;

}
`
Container.FilterCon = styled.div`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.015em;
color: #2C2C2C;
display:flex;
margin-left:auto;
`
Container.Filter = styled.select`
width:110px;
height:17px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.015em;
color: #FE5F1E;
border: none;
outline:none;
border-bottom:1px dashed #FE5F1E;

`
Container.FilterOption = styled.option`
width: 132px;
height: 136px;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
border-radius: 10px;
`
