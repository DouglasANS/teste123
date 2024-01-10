import React, { useRef, useState } from 'react'

import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import { Button, Dialog } from '@mui/material';
import Carteira1 from './Carteira1';
import html2canvas from 'html2canvas';
import carteira2 from '../assets/carteira2.png';
import carteira1 from '../assets/carteira1.png';
import Teste from '../Teste';
import domtoimage from 'dom-to-image';
import QRCode from 'react-qr-code';
import CryptoJS from 'crypto-js';
import { useEffect } from 'react';
import { format } from 'date-fns';

export const PhotoPerfil1 = styled.img`
    position: absolute;
    top: 85px;
    right: 14px;
    width: 92px;
    height: 127px;
`
export const PhotoPerfil = styled.img`
    position: absolute;
    top: 68px;
    right: 279px;
    width: 93px;
    height: 113px;
`
export const PhotoPerfil1PNG = styled.img`
    position: absolute;
    top: 224px;
    left: 372px;
    width: 240px;
    height: 332px;
`
export const PhotoPerfilPNG = styled.img`
    position: absolute;
    top: 177px;
    left: 70px;
    width: 234px;
    height: 294px;
`

export const Text = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 10px;
    font-weight: 400;
`
export const TextPNG = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 22px; 
    font-weight: 400;
`
export const TextLabel1 = styled.h3`
     font-family: Helvetica, sans-serif;
  font-size: 13px;
  line-height: 18px;
`
export const TextLabel1PNG = styled.h3`
     font-family: Helvetica, sans-serif;
  font-size: 30px;
  line-height: 38px;
`
export const TextLabel = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 10px;
    font-weight: 400;
    font-weight: bold;
`
export const TextLabelPNG = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: 22px;
    font-weight: 400;
    font-weight: bold;
`

export const TextLabelnnn = styled.h3`
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-size: ${props => props.size}; 
    font-weight: 400;
    font-weight: bold;
`

export const DivText = styled.div`
    position: absolute;
    top:  ${props => props.top};
    right:  ${props => props.right};
    left:  ${props => props.left};
    font-family: 'Open Sans', sans-serif;
    color: #212408;
    font-weight: 400;
    display: flex;
    justify-content: start;
    height: 5px;
    width: ${props => props.width};
`
export const DivTextPNG = styled.div`
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
export const DivCarteira = styled.div`

    flex-direction: column;
    padding-top: 60px;
    @media (max-width: 1000px) {
    display: flex ;
    flex-direction: column-reverse;
    padding: 0px 0px 60px 0px;

  } 
`

export default function ModelCarteira({ currentImagem, inputData, setOpen, open, componentRefModile1, resolution, setSelectedModel, selectedModel }) {

  const [openCarteira2PNG, setOpenCarteira2PNG] = useState(false)
  const [linkQrCode, setLinkQrCode] = useState('')

  const today = format(new Date(), 'dd-MM-yyyy');

  useEffect(()=>{
    console.log('first', today)

    var nomeLink = ''

    if(inputData?.nome){
      nomeLink = inputData.nome.replaceAll(' ', '-')

    }
    var linkqr = `https://termodeclaracao.vercel.app/${inputData.cod}5f2K1Cfq9hj513${inputData.cpf}5f2K1Cfq9hj513${inputData.curso}5f2K1Cfq9hj513${nomeLink}5f2K1Cfq9hj513${today}`
    setLinkQrCode(linkqr)
  },[inputData])

  const componentRef = useRef();




  const verifyModel = () => {
    if (selectedModel === 1) {
      return `@page {
                          size: 250px 450px;
                          margin: 0px;
                          padding: 0px
                        }
                        @media print { 
                          html, body {
                          height: 100vh; 
                          margin: 0 !important;
                          padding: 0 !important;
                          overflow: hidden;
                          }
                        }
                         `

    } else {
      return `@page {
                          size: 400px 250px;
                          margin: 0px;
                          padding: 0px
                        }
                        @media print { 
                          html, body {
                          height: 100vh; 
                          margin: 0 !important;
                          padding: 0 !important;
                          overflow: hidden;
                          }
                        }
                         `
    }

  }



  const verifyModelMobile = () => {
    if (selectedModel === 1) {
      return `
                      @media print {
                          @page {
                            size: A4 portrait;
                            margin: 0; 
                          }
                          body {
                            font-size: 16px; 
                            margin: 0; 
                          }
                          .content {
                            padding: 0px; 
                          }
                        }`

    } else {
      return `
                      @media print {
                          @page {
                            size: landscape;
                            margin: 0px
                          }
                        }`
    }

  }

  const png1 = () => {

    domtoimage.toBlob(document.getElementById('node_to_png'))
      .then(function (blob) {

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", carteira2);
        document.body.appendChild(link);
        link.click();
        link.remove();

      });

  }

  const png2 = () => {

    domtoimage.toBlob(document.getElementById('node_to_png'))
      .then(function (blob) {

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", 'carteirauen');
        document.body.appendChild(link);
        link.click();
        link.remove();

      });

  }

  const ttt = () =>{
    console.log(inputData)
    var asd = 'douglas'
  }
  return (
    <DivCarteira style={{ width: '500px', height: '650px', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div  > 
        {
          selectedModel === 1 ?
            <>
              {
                openCarteira2PNG
                  ? <div id='node_to_png' ref={componentRef} style={{ width: '550px', height: '450px', position: 'relative' }}>
                    <img style={{ width: '649px', height: '1180px' }} src={carteira1} />
                    <div style={{position: 'absolute', bottom: '-660px', left: '185px'}}>
                      {<QRCode
                        size={250}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={linkQrCode}
                        viewBox={`0 0 256 256`}
                      />}

                    </div>

                    {currentImagem.length !== 0 && <PhotoPerfil1PNG src={currentImagem} />}
                    <DivTextPNG style={{ justifyContent: 'center' }} top='190px' left='110px' width='230px'>
                      <TextLabel1PNG style={{ textAlign: 'center' }}>{inputData?.nome?.toUpperCase()}</TextLabel1PNG>
                    </DivTextPNG>
                    <DivTextPNG top='573px' left='12px' width='600px'>
                      <TextPNG>{inputData?.instituicao === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}{/* ESCOLA ESTADUAL TANCREDO NEVES */}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='670px' left='12px' width='600px'>
                      <TextPNG>{inputData?.curso?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='329px' left='12px' width='500px'>
                      <TextLabelnnn size='22px'>CPF</TextLabelnnn><TextPNG style={{ marginLeft: '3px' }}>{inputData?.cpf?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='376px' left='12px' width='500px'>
                      <TextLabelnnn size='22px'>RG</TextLabelnnn><TextPNG style={{ marginLeft: '3px' }}>{inputData?.rg?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='420px' left='12px' width='500px'>
                      <TextLabelnnn size='22px'>DATA NASC.</TextLabelnnn><TextPNG style={{ marginLeft: '3px' }}>{inputData?.dataNascimento?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    {/* <DivTextPNG top='1138px' left='12px' width='160px'>
                     <TextPNG  style={{marginLeft: '3px'}}>{inputData?.validade?.toUpperCase() === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</TextPNG>
                 </DivTextPNG>  */}
                    <DivTextPNG top='475px' left='12px' width='500px'>
                      <TextLabelnnn size='22px'>CÓD. USO</TextLabelnnn><TextPNG style={{ marginLeft: '3px' }}>{inputData?.cod?.toUpperCase()}</TextPNG>
                    </DivTextPNG>

                    <DivText top='634px' left='12px' width='160px'>
                      <TextLabelnnn size='22px'>CURSO</TextLabelnnn>
                    </DivText>
                    <DivText top='540px' left='12px' width='160px'>
                      <TextLabelnnn size='22px'>INSTITUIÇÃO</TextLabelnnn>
                    </DivText>

                  </div>
                  :
                  <div id='node_to_png' ref={componentRef} style={{ width: '250px', height: '450px', position: 'relative' }}>
                    <img style={{ width: '250px', height: '450px' }} src={carteira1} />

                    <div style={{position: 'absolute', bottom: '23px', left: '70px'}}>
                      {<QRCode
                        size={100}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={linkQrCode}
                        viewBox={`0 0 256 256`}
                      />}

                    </div>

                    {currentImagem.length !== 0 && <PhotoPerfil1 src={currentImagem} />}
                    <DivText style={{ justifyContent: 'center' }} top='71px' right='118px' width='100px'>
                      <TextLabel1 style={{ textAlign: 'center' }}>{inputData?.nome?.toUpperCase()}</TextLabel1>
                    </DivText>
                    <DivText top='218px' left='10px' width='200px'>
                      <Text>{inputData?.instituicao === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}{/* ESCOLA ESTADUAL TANCREDO NEVES */}</Text>
                    </DivText>
                    <DivText top='258px' left='10px' width='230px'>
                      <Text>{inputData?.curso?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='124px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>CPF</TextLabelnnn><Text style={{ marginLeft: '3px' }}>{inputData?.cpf?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='143px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>RG</TextLabelnnn><Text style={{ marginLeft: '3px' }}>{inputData?.rg?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='160px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>DATA NASC.</TextLabelnnn><Text style={{ marginLeft: '3px' }}>{inputData?.dataNascimento?.toUpperCase()}</Text>
                    </DivText>
                    {/* <DivText top='434px' left='-42px' width='160px'>
                    <Text  style={{marginLeft: '3px'}}>{inputData?.validade?.toUpperCase()  === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</Text>
                </DivText> */}
                    <DivText top='180px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>CÓD. USO</TextLabelnnn><Text style={{ marginLeft: '3px' }}>{inputData?.cod?.toUpperCase()}</Text>
                    </DivText>

                    <DivText top='244px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>CURSO</TextLabelnnn>
                    </DivText>
                    <DivText top='204px' left='10px' width='160px'>
                      <TextLabelnnn size='11px'>INSTITUIÇÃO</TextLabelnnn>
                    </DivText>

                  </div>
              }

            </>
            :
            <div id='node_to_png' ref={componentRef} style={{ width: '400px', height: '250px', position: 'relative' }}>

              {
                openCarteira2PNG ?
                  <div style={{position: 'relative'}}>
                    <img style={{ width: '1003px', height: '649px', boxSizing: 'border-box' }} src={carteira2} />
                    <div style={{position: 'absolute', bottom: '60px', left: '135px'}}>
                      {<QRCode
                        size={100}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={linkQrCode}
                        viewBox={`0 0 256 256`}
                      />}

                    </div>
                    {currentImagem.length !== 0 && <PhotoPerfilPNG src={currentImagem} />}
                    <DivTextPNG top='190px' left='400px' width='580px'>
                      <TextLabelPNG>{inputData?.nome?.toUpperCase()}</TextLabelPNG>
                    </DivTextPNG>
                    <DivTextPNG top='250px' left='400px' width='580px'>
                      <TextPNG>{inputData?.instituicao?.toUpperCase() === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='320px' left='400px' width='600px'>
                      <TextPNG>{inputData?.curso?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='350px' left='400px' width='360px'>
                      <TextLabelPNG>CPF:</TextLabelPNG><TextPNG style={{ marginLeft: '3px' }}>{inputData?.cpf?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='380px' left='400px' width='580px'>
                      <TextLabelPNG>RG:</TextLabelPNG><TextPNG style={{ marginLeft: '3px' }}>{inputData?.rg?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='410px' left='400px' width='580px'>
                      <TextLabelPNG>DATA DE NASC.:</TextLabelPNG><TextPNG style={{ marginLeft: '3px' }}>{inputData?.dataNascimento?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG top='440px' left='400px' width='580px'>
                      <TextLabelPNG>VALIDADE.:</TextLabelPNG><TextPNG style={{ marginLeft: '3px' }}>{inputData?.validade?.toUpperCase() === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                    <DivTextPNG style={{ flexDirection: 'column' }} top='520px' left='400px' width='580px'>
                      <TextLabelPNG>CÓD USO</TextLabelPNG>
                      <TextPNG style={{ fontWeight: 'bold' }}>{inputData?.cod?.toUpperCase()}</TextPNG>
                    </DivTextPNG>
                  </div>
                  :
                  <div style={{position: 'relative'}}>
                    <img style={{ width: '400px', height: '250px', boxSizing: 'border-box' }} src={carteira2} />
                    <div style={{position: 'absolute', bottom: '23px', left: '55px'}}>
                      {<QRCode
                        size={38}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={linkQrCode}
                        viewBox={`0 0 256 256`}
                      />}

                    </div>

                    {currentImagem.length !== 0 && <PhotoPerfil src={currentImagem} />}
                    <DivText top='80px' right='8px' width='230px'>
                      <TextLabel>{inputData?.nome?.toUpperCase()}</TextLabel>
                    </DivText>
                    <DivText top='100px' right='38px' width='200px'>
                      <Text>{inputData?.instituicao?.toUpperCase() === undefined ? 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA' : inputData?.instituicao?.toUpperCase()}{/* ESCOLA ESTADUAL TANCREDO NEVES */}</Text>
                    </DivText>
                    <DivText top='130px' right='-63px' width='300px'>
                      <Text>{inputData?.curso?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='140px' right='77px' width='160px'>
                      <TextLabel>CPF:</TextLabel><Text style={{ marginLeft: '3px' }}>{inputData?.cpf?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='150px' right='77px' width='160px'>
                      <TextLabel>RG:</TextLabel><Text style={{ marginLeft: '3px' }}>{inputData?.rg?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='160px' right='77px' width='160px'>
                      <TextLabel>DATA DE NASC.:</TextLabel><Text style={{ marginLeft: '3px' }}>{inputData?.dataNascimento?.toUpperCase()}</Text>
                    </DivText>
                    <DivText top='170px' right='77px' width='160px'>
                      <TextLabel>VALIDADE.:</TextLabel><Text style={{ marginLeft: '3px' }}>{inputData?.validade?.toUpperCase() === undefined ? '31/03/2024' : inputData?.validade?.toUpperCase()}</Text>
                    </DivText>
                    <DivText style={{ flexDirection: 'column' }} top='199px' right='77px' width='160px'>
                      <TextLabel>CÓD USO</TextLabel>
                      <Text style={{ fontWeight: 'bold' }}>{inputData?.cod?.toUpperCase()}</Text>
                    </DivText>
                  </div>
              }

            </div>

        }
      </div>
      <div style={{ width: '100%', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



        <Button style={{ margin: '0px 5px', background: '#2bb673' }} variant="contained" onClick={() => { setSelectedModel(1) }}>1</Button>

        <Button style={{ margin: '0px 5px', background: '#2bb673' }} variant="contained" onClick={() => { setSelectedModel(2) }}>2</Button>{/* 
          <Button variant="contained" onClick={()=>{atualizar()}}>change</Button>
          <input onChange={(e)=>{setHeight(e.target.value)}}/>
          <input onChange={(e)=>{setWidth(e.target.value)}}/> */}

        <Button style={{ margin: '0px 5px', background: '#2bb673' }} onClick={() => { setOpenCarteira2PNG(true) }} variant="contained" >PNG</Button>

        <Dialog styled={{ display: 'flex', zIndex: '1000', position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', background: '#fff0' }} fullWidth={true} onClose={() => setOpenCarteira2PNG(false)} open={openCarteira2PNG}>

          <Button variant="contained" style={{ background: '#2bb673' }} onClick={() => { png2() }}>PNG DOWNLOAD</Button>

        </Dialog>

        {resolution &&
          <>
            {open && <Dialog styled={{ display: 'flex', zIndex: '1000', position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', background: '#fff0' }} fullWidth={true} onClose={() => setOpen(false)} open={open}>

              <h5 style={{ margin: '10px 20px' }}>Obs: Se o card for tipo 2 mudar a configuração orientação de vertical para horizontal</h5>
              <ReactToPrint
                trigger={() => <Button style={{ background: '#2bb673' }} variant="contained">Imprimir</Button>}
                content={() => componentRefModile1.current}
                onAfterPrint={() => { setOpen(false) }}
                pageStyle={verifyModelMobile()}
                documentTitle={`CARTEIRA ${inputData?.nome?.toUpperCase() === undefined ? '' : inputData?.nome?.toUpperCase()}`}
              />

            </Dialog>}
          </>
        }

        {resolution ? <Button style={{ margin: '0px 5px', background: '#2bb673' }} onClick={() => setOpen(true)} variant="contained">Gerar Pdf</Button>
          :
          <ReactToPrint
            pageStyle={verifyModel()}
            trigger={() => <Button style={{ margin: '0px 5px', background: '#2bb673' }} variant="contained">Gerar Pdf</Button>}
            content={() => componentRef.current}
            //removeAfterPrint={false}
            onAfterPrint={() => { setOpen(false) }}
            documentTitle={`CARTEIRA ${inputData?.nome?.toUpperCase() === undefined ? '' : inputData?.nome?.toUpperCase()}`}

          />}




        {/* @page {
    size: A4 landscape;
  } */}

      </div>

      {/*  

        <div style={{marginLeft: '100px'}}>

        <Button variant="contained" onClick={()=>{setSelectedModel(1)}}>1</Button>
        <Button variant="contained" onClick={()=>{setSelectedModel(2)}}>2</Button>

        <Button variant="contained" onClick={()=>{downalodPng()}}>Gerar png</Button>

        <ReactToPrint
            trigger={() => <Button variant="contained">Gerar Pdf</Button>}
            content={() => componentRef.current}
            
            />
            </div> */}
    </DivCarteira>
  )
}
