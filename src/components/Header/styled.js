import styled from "styled-components";

export const Container = styled.div`
padding:50px 70px;
width:100%;
display: flex;
`
Container.LogoCon = styled.div`
display:flex;
`
Container.TexCon = styled.div`
margin:0 0 0 17px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
height: 40px;
width: 300px;
`

Container.LogoImg = styled.img`

width: ${({width})=>width ? `${width}px`: '38px'}
height: ${({height})=>height ? `${height}px`: '38px'}

`
Container.LogoT1 = styled.div`
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #181818;
`

Container.LogoT2 = styled.div`
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 19px;
color: ${({w})=>w ? '#fff' : "#7B7B7B" }
;
margin: 0 0 0 5px;
text-decoration:none;
`
Container.Btn = styled.button`
position: fixed;
   
    right: 0;
    right:120px;
width: 150px;
height: 50px;
background: #FE5F1E;
border-radius: 30px;
outline:none;
display:flex;
justify-content:center;
align-items:center;
border: none;
margin-left:auto;
padding: 15px 20px;
z-index:999;
:active{
    transition:linear 0.1s;
    transform:scale(0.95)
}

`
Container.L = styled.div`
width: 1px;
height: 25px;
background: rgba(255, 255, 255, 0.25);
margin:0 10px;
`
Container.L2 = styled.div`
width: 100%;
height: 1px;
background: #F7F7F7;`