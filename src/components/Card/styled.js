import styled from "styled-components";

export const Container = styled.div`
width: 280px;
height: 459px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:20px;

`
Container.Img = styled.img`
width: 259.12px;
height: 260px;
`
Container.T1 =styled.div`
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
text-align: center;
letter-spacing: 0.01em;
color: #000000;
`

Container.ItemCon =styled.div`
width: 280px;
height: 100px;
background: #F3F3F3;
border-radius: 10px;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:10px 0;
padding:10px 15px;
`


Container.PitsaSizeCon =styled.div`
width: 100%;
height: 35px;
display: flex;
`

Container.PitsaSize =styled.div`
width: 96.01px;
height: 42px;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 17px;
text-align: center;
letter-spacing: 0.015em;
color: #2C2C2C;
border-radius: 5px;

background: ${({B})=>B && "#FFFFFF"};
:hover{
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
:active{
    background: #FFFFFF;
    
}
`
Container.Price =styled.div`
width: 100%;
height: 45px;
display: flex;
display: flex;
justify-content:space-between;
align-items:center;
padding: 10px 0 ;

`
Container.Btn =styled.button`
width: 155px;
height: 40px;
left: 237px;
top: 792px;

background: #FFFFFF;
border: 1px solid #EB5A1E;
box-sizing: border-box;
border-radius: 30px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
display: flex;
justify-content:center;
align-items:center;
color: #EB5A1E;
:hover{
color: #fff;
background: #EB5A1E;
}
:active{
    transition:linear 0.1s;
    transform:scale(0.95)
}

`
Container.BtnSpan =styled.div`
margin: 0 5px 0 0;
font-size:26px;

`
Container.NumberSpan =styled.div`
width: 22px;
height: 22px;
border-radius:50%;
background: #EB5A1E;
font-weight: bold;
font-size: 13px;
line-height: 16px;
color: #FFFFFF;
display: flex;
justify-content:center;
align-items:center;
margin: 0 0 0 6px;
`

