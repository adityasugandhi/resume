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

