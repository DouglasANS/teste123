import React from 'react'
import styled from 'styled-components'
import carteira1 from '../../assets/carteirauen.png';

export const PhotoPerfil = styled.img`
    position: absolute;
    top: 111px;
    right: 45px;
    width: 125px;
    height: 169px;
`

export const Text = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: #515244;
    font-size: 8px;
    font-weight: 400;
`

export const DivText = styled.div`
    position: absolute;
    top:  ${props => props.top};
    right:  ${props => props.right};
    font-family: 'Open Sans', sans-serif;
    color: #212408;
    font-weight: 400;
    display: flex;
    justify-content: center;
    height: 5px;
    width: ${props => props.width};
`

export default function Carteira1({currentImagem, inputData}) {
  return (
    <div style={{width: '350px', height: '600px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <img style={{width: '280px', height: '450px'}} src={carteira1} />
                <PhotoPerfil src={currentImagem} />
                <DivText top='179px' right='161px' width='160px'>
                    <Text>{inputData?.nome?.toUpperCase()}</Text>
                </DivText>
                <DivText top='313px' right='150px' width='160px'>
                    <Text>{inputData?.instituicao?.toUpperCase()}{/* ESCOLA ESTADUAL TANCREDO NEVES */}</Text>
                </DivText>
                <DivText top='313px' right='41px' width='80px'>
                    <Text>{inputData?.curso?.toUpperCase()}</Text>
                </DivText>
                <DivText top='353px' right='193px' width='80px'>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.cpf?.toUpperCase()}</Text>
                </DivText>
                <DivText top='353px' right='82px' width='80px'>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.rg?.toUpperCase()}</Text>
                </DivText>
                <DivText top='396px' right='213px' width='80px'>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.matricula?.toUpperCase()}</Text>
                </DivText>
                <DivText top='396px' right='130px' width='80px'>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.dataNascimento?.toUpperCase()}</Text>
                </DivText>
                <DivText top='396px' right='53px' width='80px'>
                    <Text style={{fontWeight: 'bold'}}>{inputData?.cod?.toUpperCase()}</Text>
                </DivText>
            </div>
  )
}
