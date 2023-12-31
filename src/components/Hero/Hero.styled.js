import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:3.75rem;
 
  @media (max-width: 968px) {
    img{
      width:60%;
    }
  }
  

  @media (max-width: 868px) {
    margin-top:-0.2em;
    display:flex;
    flex-direction:reverse;
    width:100%;
    gap:1.5rem;
    
  img{
    width:50%;
  }
  }

   @media (max-width: 500px) {
     flex-direction: column-reverse;
    img{
      width:100%;
    }
   }
`;

export const SectionContent = styled.div`

  h1 {
  
    display:flex;
    flex-direction:column;
    font-family: "Poppins", sans-serif;
  width:auto;
  
    color: #077fde;
    font-size:64px;
font-style: normal;
font-weight: 700;
 line-height:normal;
  }

  #one{
    width: 252.469px;
height: 24px;
flex-shrink: 0;
  }

  p {
    margin-top:-1.7rem;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color:#25282B;
    width:90%;
   
    line-height:27px;
  }
  #two,#mob{
    display:none;
  }
  button{
    display:none;
  }

  // media query

  @media (max-width: 1024px) {
    img{
      width:60%;
    }
    h1,#mob{
       font-size: 38px;
       line-height: normal;
     }
     p {
 font-size: 20px;
     }
  }
 
  // Tablet !!
  @media (max-width: 868px) {
   
    #one,#desk{
    display:none;
  }
  #mob{
    display:initial;
  }
    #two{
      display:flex;
      width: 143.849px;
      height: 13.674px;


    }
 
    h1,#mob{
     word-spacing:normal;
      font-size: 28px;
      max-width: 343px;
      line-height: normal;
      height: auto;
      
    }
    p {
      width: 100%;
      margin-top:1rem;
      color: #25282B;
font-family: "Poppins",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
    }
    width: 100%;
  }




  // MOBILE ! 
   @media (max-width: 500px) {
     button{
      cursor:pointer;
      color: var(--White, #FFF);
text-align: center;
font-family: "Poppins";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
white-space:nowrap;
      outline:none;
      border:unset;
      display: flex;
width: 100%;
height: 40px;
padding: 9px 133px;
margin:0 auto;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 12px;
border-radius: 5.481px;
background: var(--Primary, #077FDE);
    }
    width: 100%;
    #mob{
       font-size: 24px;
    }
    p{
      max-width: 343px;
    }
  }
`;


