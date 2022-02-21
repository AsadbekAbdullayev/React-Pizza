import React,{useContext} from 'react';
import {Container,Wrapper} from './styled'
import {Korzina} from '../../Context/Korzina'
import {Allprise} from '../../Context/allprise'


const Item = ({id,prise,size,img,name}) => {
  const [KorzinaData, SetKorzinaData] = useContext(Korzina)
  const [AllpriseData, SetAllpriseData] = useContext(Allprise)
  const hey = (id,prise,size)=>{
    
    const N =KorzinaData.filter((v)=>!(v.id===id) || !(v.size===size))
    SetKorzinaData(N)
    SetAllpriseData(AllpriseData-prise)
    
  }

  return <Container>
<Wrapper>

        <Container.Img src={img}/>
        <Container.TextCon>
            <Container.T1>{name}</Container.T1>
            <Container.T2> {size} см.</Container.T2>
        </Container.TextCon>
</Wrapper>

{/* <Wrapper>
        <Container.Btn s>-</Container.Btn>
        <Container.T1>3</Container.T1>
        <Container.Btn s>+</Container.Btn>

</Wrapper> */}
<Container.T1>{prise} ₽ </Container.T1>

<Container.Btn onClick={()=>hey(id,prise,size,img)}>+</Container.Btn>


  </Container>;
};

export default Item;
