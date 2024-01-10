import React from 'react';
import './print-style.css';
import carteira1 from '../assets/carteira1.png';
import styled from 'styled-components';

export const PhotoPerfil1 = styled.img`
    position: absolute;
    top: 80px;
    right: 14px;
    width: 92px;
    height: 127px;
`
export const PhotoPerfil = styled.img`
    position: absolute;
    top: 210px;
    left: 469px;
    width: 300px;
    height: 301px;
`

export const Text = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 23px;
    font-weight: 400;
`
export const TextLabelName = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 30px;
    font-weight: 400;
    font-weight: bold;
`
export const TextLabel = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 23px;
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

function Teste({currentImagem, inputData, resolution, componentRefModile1}) {
  

  return (
    <div>
      <div ref={componentRefModile1} style={{display: resolution === false ? 'none' : 'flex', width: '100%', height: '100%', padding: '0px', margin: '0px'}} >{/*  //padding: '0px', margin: '0px' */}
        <img alt='carteira imagem' style={{ width: '100%', height: '1090px', boxSizing: 'border-box', padding: '0px', margin: '0px'}} src={carteira1} />
        {currentImagem.length !== 0 && <PhotoPerfil src={currentImagem} />}
        <DivText top='175px' left='120px' width='300px'>
                    <TextLabelName style={{textAlign: 'center'}}>{inputData?.nome?.toUpperCase()}</TextLabelName>
                </DivText>
                <DivText top='525px' left='15px' width='800px'>
                    <Text>{inputData?.instituicao?.toUpperCase() === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}</Text>
                </DivText>
                <DivText top='610px' left='15px' width='650px'>
                  <Text>{inputData?.curso?.toUpperCase()}</Text>
                </DivText>
                <DivText top='303px' left='15px' width='400PX'>
                <TextLabel>CPF</TextLabel><Text  style={{marginLeft: '3px'}}>{inputData?.cpf?.toUpperCase()}</Text>
                </DivText>
                <DivText top='346px' left='15px' width='400PX'>
                <TextLabel>RG</TextLabel><Text  style={{marginLeft: '3px'}}>{inputData?.rg?.toUpperCase()}</Text>
                </DivText>
                <DivText top='386px' left='15px' width='400PX'>
                <TextLabel>DATA NASC.</TextLabel><Text  style={{marginLeft: '3px'}}>{inputData?.dataNascimento?.toUpperCase()}</Text>
                </DivText>
               {/*  <DivText top='1050px' left='440px' width='200PX'>
                    <Text  style={{marginLeft: '3px'}}>{inputData?.validade?.toUpperCase()  === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</Text>
                </DivText>  */}
                <DivText top='438px' left='15px' width='400PX'>
                    <TextLabel>CÓD. USO</TextLabel><Text  style={{marginLeft: '3px'}}>{inputData?.cod?.toUpperCase()}</Text>
                </DivText>

                <DivText top='580px' left='15px' width='160px'>
                <TextLabel size='11px'>CURSO</TextLabel>
                </DivText>
                <DivText top='490px' left='15px' width='160px'>
                <TextLabel size='11px'>INSTITUIÇÃO</TextLabel>
                </DivText>
      
      
      
      </div>
    </div>
  );
}

export default Teste;