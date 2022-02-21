import React,{useState,useContext} from 'react';
import Header from '../../components/Header';
import {Container,Wrapper} from './styled';
import {Select} from '../../Context/select'
import { Link } from 'react-router-dom';

const Admin = () => {

  const sd = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    width:'200px',
    height:'50px'
  }
  
  const [active, setActive] = useState(null)
  const [Sel, SetSel] = useContext(Select)

const onEdit = (id)=>{
  Sel.map((v)=>
    v.id === id && setActive(v)
  )

}

const onDel = (id)=>{
  const ND = Sel.filter((v)=>
  v.id !== id

)
SetSel(ND)

}

const onSave = ()=>{
  const ND = Sel.map((v)=>
    v.id === active.id ? active :v
  )
  SetSel(ND)
  setActive(null)
}


const onChang = (e)=>{
const {value, name} = e.target
setActive({
  ...active,
  [name]:value
})

}



  return (
           <Container>
      <Header/>
  <Link style={{textDecoration:'none'}} to='/home'><Container.Btn >{'<'} Вернуться назад</Container.Btn> </Link>


         
      <table>
            <tr style={sd}>
              <th style={sd}>id</th>
              <th style={sd}>image</th>
              <th style={sd}>name</th>
              <th style={sd}>Small size prise</th>
              <th style={sd}>Medium size prise</th>
              <th style={sd}>Large size prise</th>
              <th style={sd}>Category</th>
              <th style={sd}>Action</th> 
            </tr>

            {
              Sel.map(({id,name,prise,category,img})=>
                <tr style={sd}>
                  <th style={sd}>{id}</th>
                  {
                     <th style={sd}><img src={img} style={{height:'110px'}}/></th>
                  }
                  {
                    id===active?.id ?<th style={sd}> <input type="text" onChange={(e)=>onChang(e)} name='name' value={active?.name} /> </th>:<th style={sd}>{name}</th>
                  }
                   {
                    id===active?.id ?<th style={sd}> <input type="number" onChange={(e)=>onChang(e)} name='prise[0]'   value={active?.prise[0]} /> </th>:<th style={sd}>{prise[0]}</th>
                  }
                   {
                    id===active?.id ?<th style={sd}> <input type="text" onChange={(e)=>onChang(e)} name='prise[1]' value={active?.prise[1]} /> </th>:<th style={sd}>{prise[1]}</th>
                  }
                   {
                    id===active?.id ?<th style={sd}> <input type="text" onChange={(e)=>onChang(e)} name='prise[2]' value={active?.prise[2]} /> </th>:<th style={sd}>{prise[2]}</th>
                  }
                 {
                    id===active?.id ?<th style={sd}> <input type="text" onChange={(e)=>onChang(e)} name='category' value={active?.category} /> </th>:<th style={sd}>{category}</th>
                  }



              <th style={sd,{display:'flex',justifyContent:'space-between',width:'100px'}}>

                <button onClick={()=>onDel(id)}>delete</button>
               {
                 id===active?.id ? <><button onClick={()=>onSave(id)}>Save</button> <button onClick={()=>setActive(null)}>Cansel</button></>: <button onClick={()=>onEdit(id)}>edit</button>
               }
               
              </th>
            </tr>
              )
            }

          </table>

           </Container>
  )
}

export default Admin;
