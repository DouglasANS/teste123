import React from 'react'
import styled from 'styled-components';
import colorida from '../assets/colorida.png'
import modelcarteira from '../assets/modelcarteira.png'
import carteira2 from '../assets/carteira2.png';
import uen from '../assets/UEN.png'

const FooterDivs = styled.div` 
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 40px;
  background: rgb(11,127,47);
  background: linear-gradient(90deg, rgba(11,127,47,1) 0%, rgba(207,255,247,1) 100%);
`

const IconUen1 = styled.img`
    width: 80px;
    height: 40px;
`
const IconUen2 = styled.img`
    width: 75px;
    height: 25px;
`
const IconUen3 = styled.img`
    position: absolute;
    left: calc(50vw - 40px) ;
    bottom: 100px;
    width: 50px;
    height: 50px;
`

export default function FooterDiv() { 

    
  return (
    <FooterDivs>
        <IconUen1 src={uen} />
        <IconUen2 src={colorida} />
        {/* <IconUen3 src={modelcarteira} /> */}
    </FooterDivs>
  )
}
