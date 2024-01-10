import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import carteira2 from '../../assets/carteira2.png';
import styled from 'styled-components';

export const PhotoPerfil = styled.img`
    position: absolute;
    top: 178px;
    left: 76px;
    width: 242px;
    height: 292px;
`

export const PhotoPerfilAndroid = styled.img`
    position: absolute;
    top: 179px;
    left: 80px;
    width: 259px;
    height: 292px;
`

export const Text = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 27px;
    font-weight: 400;
`
export const TextLabel = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 27px;
    font-weight: 400;
    font-weight: bold;
`

export const DivText = styled.div`
    position: absolute;
    top:  ${props => props.top};
    left:  ${props => props.left};
    font-family: 'Open Sans', sans-serif;
    color: #212408;
    font-weight: 400;
    display: flex;
    justify-content: start;
    height: 5px;
    width: ${props => props.width};
`

function MobileCarteira2({currentImagem, inputData, resolution, componentRefModile1}) {

  const [deviceIsIOS, setDeviceIsIOS] = useState(false)

  useEffect(()=>{
    if( navigator.userAgent.match(/iPhone/i)){
      setDeviceIsIOS(true)
    }
  },[])
  

  return (
    <div>
      <div ref={componentRefModile1} style={{display: resolution === false ? 'none' : 'flex', width: '100%', height: '100%', padding: '0px', margin: '0px'}} >{/*  //padding: '0px', margin: '0px' */}
        <img style={{ width: '100%', height: '650px', boxSizing: 'border-box', padding: '0px', margin: '0px'}} src={carteira2} />
        {
          deviceIsIOS ? <>{currentImagem.length !== 0 && <PhotoPerfil src={currentImagem} />}</> : <>  {currentImagem.length !== 0 && <PhotoPerfilAndroid src={currentImagem} />}</>
        }
                <DivText top='200px' left='400px' width='600px'>
                    <TextLabel>{inputData?.nome?.toUpperCase()}</TextLabel>
                </DivText>
                <DivText top='270px' left='400px' width='600px'>
                    <Text>{inputData?.instituicao?.toUpperCase() === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}{/* ESCOLA ESTADUAL TANCREDO NEVES */}</Text>
                </DivText>
                <DivText top='350px' left='400px' width='850px'>
                  <Text>{inputData?.curso?.toUpperCase()}</Text>
                </DivText>
                <DivText top='380px' left='400px' width='600px'>
                  <TextLabel>CPF:</TextLabel><Text  style={{marginLeft: '7px'}}>{inputData?.cpf?.toUpperCase()}</Text>
                </DivText>
                <DivText top='410px' left='400px' width='600px'>
                <TextLabel>RG:</TextLabel><Text  style={{marginLeft: '7px'}}>{inputData?.rg?.toUpperCase()}</Text>
                </DivText>
                <DivText top='440px' left='400px' width='600px'>
                <TextLabel>DATA DE NASC.:</TextLabel><Text  style={{marginLeft: '7px'}}>{inputData?.dataNascimento?.toUpperCase()}</Text>
                </DivText>
                <DivText top='470px' left='400px' width='600px'>
                <TextLabel>VALIDADE.:</TextLabel><Text  style={{marginLeft: '7px'}}>{inputData?.validade?.toUpperCase()  === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</Text>
                </DivText>
                <DivText style={{flexDirection: 'column'}} top='560px' left='400px' width='160px'>
                    <TextLabel>CÓD USO</TextLabel>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.cod?.toUpperCase()}</Text>
                </DivText>
      
      
      
      </div>
    </div>
  );
}

export default MobileCarteira2;