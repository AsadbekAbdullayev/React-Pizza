import React,{useContext} from 'react';
import {Container} from './styled'
import { Navbard } from '../../Context/navbar';
import { Select } from '../../Context/select'
import { Pdata } from '../../mock/PitsaData';
const Navbar = () => {

  const [NavbarData, SetNavbarData] = useContext(Navbard)
  const [Sel,SetSel] = useContext(Select)
  
  const Onselect = (e) =>{
    
    e==='по цене' && SetSel([...Pdata.sort((a, b)=>{return b.prise[0] - a.prise[0]})])
    
    e==='по алфавиту' &&  SetSel([...Pdata.sort((a,b)=>{return a.name.localeCompare(b.name)})])
    
    e==='популярности' && SetSel([...Pdata])
    
  }
  
  
const  Set = (v) =>{
  SetNavbarData(v)
}
  return <Container>
      <Container.Btn H={NavbarData==='Все'} onClick={()=>Set('Все')}>Все</Container.Btn>
      <Container.Btn H={NavbarData==='Мясные'} onClick={()=>Set('Мясные')}>Мясные</Container.Btn>
      <Container.Btn H={NavbarData==='Вегетарианская'} onClick={()=>Set('Вегетарианская')}>Вегетарианская</Container.Btn>
      <Container.Btn H={NavbarData==='Гриль'} onClick={()=>Set('Гриль')}>Гриль</Container.Btn>
      <Container.Btn H={NavbarData==='Острые'} onClick={()=>Set('Острые')}>Острые</Container.Btn>

        <Container.FilterCon>
        Сортировка по:<Container.Filter onChange={(e)=>Onselect(e.target.value)}>
            <Container.FilterOption value="популярности" >популярности</Container.FilterOption>
            <Container.FilterOption  value="по цене">по цене</Container.FilterOption>
            <Container.FilterOption  value="по алфавиту">по алфавиту</Container.FilterOption>
        </Container.Filter>
        </Container.FilterCon>
      </Container>;
};

export default Navbar;
