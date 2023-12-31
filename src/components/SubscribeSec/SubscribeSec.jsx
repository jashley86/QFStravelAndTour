import React from 'react'
import { SubscribeContainer, SubscribeCon } from './SubscribeSec.styled'

import btn from "../../assets/images/btn2.png"

export default function SubscribeSec() {
  return (
    <SubscribeCon id='subscribe'>
   <SubscribeContainer>
    <h1 id='h1'>Enter your e-mail address and get notified of exclusive offers</h1>
    <div>
        <input type="email" placeholder='Enter your e-mail address here' />
        <button>Subscribe</button>
    </div> 
    <img src={btn}/> 
   </SubscribeContainer>  
   </SubscribeCon> 
  )
}
