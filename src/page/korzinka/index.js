import React,{useContext} from 'react';
import Header from '../../components/Header';
import {Container,Wrapper} from './styled';
import G from '../../assets/G.png';
import Del from '../../assets/delete.png';
import Item from '../../components/KorzinaItem';
import {Link} from 'react-router-dom'
import {Korzina} from '../../Context/Korzina'
import {Allprise} from '../../Context/allprise'
import E from '../../assets/E.png'
import L from '../../assets/Layer.png'


const Korzinka = () => {
const [KorzinaData, SetKorzinaData] = useContext(Korzina)
const [AllpriseData, SetAllpriseData] = useContext(Allprise)

const Alldelete =()=>{
  SetKorzinaData([])
  SetAllpriseData(0)
}
  return (
           <Container>
      <Header/>

      <Wrapper>
      {
      KorzinaData.length === 0 ? <></>: <>
          <Container.TextCon>
              <Container.Img width={150} src={G}/>
              <Container.DeleteBtn onClick={Alldelete}>
              <Container.Img src={Del} width={20} height={20}/> 
             Очистить корзину
          </Container.DeleteBtn>
          
          </Container.TextCon></>
      }
          </Wrapper>

          <Wrapper>
  
    {
      KorzinaData.length === 0 ?
       <Wrapper.B1 >

         <Wrapper.F><Wrapper.T1>Корзина пустая </Wrapper.T1><Wrapper.img src={E}/></Wrapper.F>
        

         <Wrapper.img1 src={L}/>
        <Link style={{textDecoration:'none'}} to='/home'>   <Container.Btn  Q > Вернуться назад</Container.Btn> </Link>

      </Wrapper.B1> :


        <Wrapper.B O>{
          KorzinaData.map(({id,prise,size,img,name},I)=>
          <Item key={I} id={id} prise={prise} size={size} img={img} name={name} />
          
          )}
        </Wrapper.B>
        
        
      }
       
      </Wrapper>
 

      <Wrapper>
      {
      KorzinaData.length === 0 ? <></>: <>
        
          <Container.PriceCon>
            <Container.T>
            Всего пицц: <Container.spanSht>{KorzinaData.length} шт.</Container.spanSht>
            </Container.T>
            <Container.T m>
            Всего пицц: <Container.priseSht>{AllpriseData} ₽</Container.priseSht>
            </Container.T>
            </Container.PriceCon>
            
            
         <Container.BtnCon>
        <Link style={{textDecoration:'none'}} to='/home'><Container.Btn >{'<'} Вернуться назад</Container.Btn> </Link>
           <Container.Btn m >Оплатить сейчас</Container.Btn>
         </Container.BtnCon></>
}
      </Wrapper>
        

           </Container>
  )
}

export default Korzinka;
