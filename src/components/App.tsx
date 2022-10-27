import { useState } from 'react'
import {Background, } from '../styles';
import {BiUserCircle, BiSearch} from 'react-icons/bi';

export function App() {
  const [count, setCount] = useState(0)

  return ( 
 
  <Background> 
    
    <img width={175} height={34} src="./logo_full.png" alt="" />
    <ul>
      <li>INICIO</li>
      <li>ANIMES</li>
      <li>CALENDÁRIO</li>
      <li>PEDIDOS</li>
      <li>TOP USUÁRIOS</li>
      
    </ul>
    <div>
    <a href=""><BiSearch/></a>
    <a href=""><BiUserCircle/></a>
    </div>
  
  </Background>
  
  
 
  
    
  )

}


