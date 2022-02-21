import React,{useContext} from 'react';

import { Carousel} from 'antd';
import Header from '../../components/Header';
import {Container,Wrapper} from './styled';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import { Navbard } from '../../Context/navbar';
import { Select } from '../../Context/select';
import p1 from '../../assets/k1.jpeg'
import p2 from '../../assets/k2.jpeg'
import p3 from '../../assets/k3.jpeg'
import p4 from '../../assets/k4.jpeg'
const Home = () => {
  const [NavbarData] = useContext(Navbard)
  const [Sel] = useContext(Select)
  


    const contentStyle = {
      height: '370px',
      color: '#fff',
      
      textAlign: 'center',
      background: '#364d79',
      display:'flex',
      justifyContent:'center'
    };

    

  return (
           <Container>
      <Header/>
      <Carousel style={contentStyle} autoplay>
  <img src={p1} />
  <img src={p2} />
  <img src={p3} />
  <img src={p4} />
  </Carousel>
      <Wrapper>
            <Navbar/>
      </Wrapper>
     
      <Wrapper.F>
        {
          Sel.map(({id,name,size,prise,category,img})=>NavbarData === category ||NavbarData=== 'Все'?<Card key={id} id={id} name={name}  size={size} prise={prise} category={category} img={img}/>:'')
        }
        
      </Wrapper.F>
      <Wrapper.F>
      
      </Wrapper.F>

           </Container>
  )
}

export default Home;
