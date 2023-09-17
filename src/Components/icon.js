import React from "react";
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  lord-icon {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 320px) {
    lord-icon {
      height: 100px;
      width: 100px;
    }
  }

  @media (min-width: 321px) and (max-width: 720px) {
    lord-icon {
      height: 150px;
      width: 150px;
    }
  }
`;

const Linkedinicon = styled.div`
display: flex;
justify-content: center;
align-items: center;
lord-icon{
    height:125px;
    width:125px ;
}

.Linkedin-Icon{
    height: 100px;
    width: 100px;
}
@media (max-width: 320px) {
    lord-icon {
      height: 50px;
      width: 50px;
    }
    .Linkedin-Icon{
        height:100px;
        width:100px;
    }
  }

  @media (min-width: 321px) and (max-width: 720px) {
    lord-icon {
      height: 75px;
      width: 75px;
    }
    .Linkedin-Icon{
        height: 50px;
        width: 50px;
    }
}



`
const ReactLogo=styled.div`
.container{
  width:100px;
  height:100x;
  margin:20px auto 0 auto;
  background:#222;

  display:flex;
  align-items: center;
  justify-content: center;
}

.react-logo{
  display: inline-block;
  border-radius:50%;
  border:10px solid #00d8ff;

  animation-name:rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

.react-logo , .react-logo:before , .react-logo:after{
  position:absolute;
  display: inline-block;
  width:200px;
  height:70px;
  border-radius:50%;
  border:10px solid #00d8ff;
}

.nucleo , .react-logo , .react-logo:before , .react-logo:after {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nucleo{
  width:40px;
  height:40px;
  border-radius:100%;
  background:#00d8ff;
}

.react-logo:before , .react-logo:after{
  content:"";
}

.react-logo:after{
  transform:rotate(-57deg);
}

.react-logo:before{
  transform:rotate(57deg);
}

.title{
font-size:60px;
background:#222;
color:#00d8ff;
width:250px;
margin:2px auto;
text-align:center;
}

@keyframes rotate{

  100%{
    transform:rotate(360deg);
  }
}
`

export const github = (
  <Linkedinicon>
    <lord-icon
      src="https://cdn.lordicon.com/ochimkct.json"
      trigger="hover"
      colors="primary:#ffffff,secondary:#ffffff"
    ></lord-icon>
  </Linkedinicon>
);

export const ide = (
  <Icons>
    <lord-icon
      defineElement=""
      src="https://cdn.lordicon.com/anihkfxp.json"
      trigger="hover"
      colors="primary:#ffffff,secondary:#ffffff"
    ></lord-icon>
  </Icons>
);

export const avatar = (
  <Icons>
    <lord-icon
      src="https://cdn.lordicon.com/kxrhwtdg.json"
      trigger="hover"
      colors="primary:#ffffff,secondary:#ffffff"
    ></lord-icon>
  </Icons>
);


export const LinkedIn =
<Linkedinicon>
<img className="Linkedin-Icon" src="https://img.icons8.com/glyph-neue/128/FFFFFF/linkedin.png" alt=''/>
</Linkedinicon>

export const ReactAnimatoin = 
<lottie-player src="https://lottie.host/85bd4100-c948-49d5-907d-b80c262fc076/aA1sgjOq4p.json" background="transparent" speed="1" style={{width: '100px',height: '100px'}}></lottie-player>
