import styled from "styled-components";

export const Container = styled.div`
width: 1290px;
height: 880px;
margin:30px auto;
background: #FFFFFF;
box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
border-radius: 10px;
`

export const Wrapper = styled.div`
padding:20px 207px;
`
 Wrapper.F = styled.div`
display: flex;
padding:20px 207px;
`

Wrapper.A = styled.div`
padding:110px;
height: 400px;
width:100%;
font-size:30px;
border:2px solid grey;
text-align:center;
border-radius:10px;
color:#000;
`

Wrapper.B = styled.div`
padding:10px;
height: 400px;
width:100%;
overflow-Y: ${({O})=>O && "scroll"};

`


Wrapper.B1 = styled.div`
height: 350px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 0 50px;
`
Wrapper.T1 = styled.div`
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 39px;
letter-spacing: 0.01em;
color: #000000;
`

Wrapper.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 145.4%;
text-align: center;
letter-spacing: 0.01em;
`
Wrapper.img = styled.img`
width: 32px;
height: 32px;
margin: 0 0 0 10px;
`
Wrapper.img1 = styled.img`
width: 260px;
height: 230px;
margin: 50px 0;
`



Container.Img = styled.img`
width: ${({width})=>width ? `${width}px`: '38px'};
height: ${({height})=>height ? `${height}px`: '38px'};
`
Container.TextCon = styled.div`
width: 100%;
height: 60px;
display:flex;
align-items:center;
`
Container.DeleteBtn = styled.button`
outline:none;
border:none;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
background: #FFFFFF;
display:flex;
align-items:center;
color: #B6B6B6;
margin-left:auto;
:hover{
    color: #111;
}
`
Container.PriceCon = styled.div`
width: 100%;
height: 60px;
display:flex;
align-items:center;
`

Container.spanSht = styled.div`
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 27px;
letter-spacing: 0.01em;
color: #000000;
`

Container.priseSht = styled.div`
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 27px;
letter-spacing: 0.01em;
color: #FE5F1E;
`
Container.T = styled.div`
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 27px;
letter-spacing: 0.01em;
color: #000000;
display: flex;
margin-left: ${({m})=>m ? `auto`: '0px'};
`

Container.BtnCon = styled.div`
width: 100%;
height: 120px;
display:flex;
align-items:center;

`


Container.Btn = styled.button`
width: 211px;
height: 55px;
background: #FFFFFF;
border: 1px solid #D3D3D3;
box-sizing: border-box;
border-radius: 30px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 19px;
text-align: center;
color: #CACACA;
display: flex;
align-items:center;
justify-content:center;
text-decoration:none;
margin-left: ${({m})=>m ? `auto`: '0px'};
:hover{
    background: ${({Q})=>Q ? '#000' :"#FE5F1E"};
    color:#fff;
}
:active{
    transition:linear 0.1s;
    transform:scale(0.95)
}
`


