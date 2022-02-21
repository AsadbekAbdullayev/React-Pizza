import React,{useContext} from 'react';
import {Container} from './styled'
import logo from '../../assets/logo.png'
import shop from '../../assets/shop.png'
import { Link,useLocation} from 'react-router-dom'
import {Korzina} from '../../Context/Korzina'
import {Allprise} from '../../Context/allprise'

const Header = () => {
  const [KorzinaData] = useContext(Korzina)
  const [AllpriseData] = useContext(Allprise)

 


  const Location = useLocation()
  return <><Container>
    <Container.LogoCon>
      <Container.LogoImg src={logo}/>
      <Container.TexCon>

      <Container.LogoT1>
      REACT PIZZA
      </Container.LogoT1>
      <Container.LogoT2>
      самая вкусная пицца во вселенной
      </Container.LogoT2>

      </Container.TexCon>

    </Container.LogoCon>
{Location.pathname === '/home' && <Link style={{textDecoration:'none',marginLeft:'auto'}} to='/korzinka'>
  
    <Container.Btn >

      <Container.LogoT2 w>
      {AllpriseData}
      </Container.LogoT2>
      <Container.L/>
      <Container.LogoImg src={shop}/>
      <Container.LogoT2 w >
      {KorzinaData.length}
      </Container.LogoT2>
    </Container.Btn>
    </Link>}

    </Container>
    <Container.L2/>

    </>
};

export default Header;
