import React,{useState,useReducer,useContext} from 'react';
import {Container} from './styled';
import {Korzina} from '../../Context/Korzina'
import {Allprise} from '../../Context/allprise'
import { useNavigate } from 'react-router';

const Card = ({id,name,size,prise,category,img}) => {

     const reducer = (state,action) =>{
        switch(action.type){
                case "AddCard":
                return (
                    [
                        
                        ...state,{
                            id:action.payload.id,
                            size:action.payload.size,
                            prise:action.payload.prise,
                            
                            img:action.payload.img
                        }
                    ]
                )
            default:return state
        }
    }
    
    const [Size,SetSize] =useState(size[0])
    const [Name,SetName] =useState(name)
    const [Prise,SetPrise] =useState(prise[0])
    const [state,dispatch] = useReducer(reducer, [])

    const [nul, setNul]= useState(false)

  const [AllpriseData, SetAllpriseData] = useContext(Allprise)

    const [KorzinaData, SetKorzinaData] = useContext(Korzina)

   const  GetSiz =(v,i)=>{
            SetSize(v)
            SetPrise(prise[i])  
   }
   

   const AddCard =(Prise,Size,img,Name)=>{
       
    dispatch({type:'AddCard',payload:{id:id,name:Name,size:Size,prise:Prise,img:img}})
    SetKorzinaData([...KorzinaData,{
        id:id,
        size:Size,
        prise:Prise,
        img:img,
        name:Name
    }])
    SetAllpriseData(AllpriseData + Prise)
    setNul(!nul)
   }
      
       
 
   

  return <Container>
      <Container.Img src={img}/>
      <Container.T1>
      {name} 
      </Container.T1>
      <Container.ItemCon>
         
        

          <Container.PitsaSizeCon>
          {
              size.map((v,i)=>
                <Container.PitsaSize onClick={()=>GetSiz(v,i)} B={v===Size} key={i}>
                {v}
            </Container.PitsaSize>
              )
          }

          </Container.PitsaSizeCon>
      </Container.ItemCon>

      <Container.Price>
      <Container.T1>
      от {Prise}  ₽
      </Container.T1>

      <Container.Btn onClick={()=>AddCard(Prise,Size,img)}>
          <Container.BtnSpan> +</Container.BtnSpan>
          
      Добавить
{
    state.length ===0 ? '' :<Container.NumberSpan>{state?.length}</Container.NumberSpan>
}
      
      </Container.Btn>
      </Container.Price>
  </Container>
};

export default Card;
