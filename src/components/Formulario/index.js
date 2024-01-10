import { Button } from '@mui/material'
import React, { useRef } from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import info from '../assets/info.png';
import DropFixImage from '../DropFixImage';

export const SectionUpload = styled.div`
cursor: pointer; 
width: 150px;
margin-left: 10px;
height: 20px;
background: #00000006;
`

export const Input = styled.input`
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: 20px;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 5px;
`

export const LabelInput = styled.h3`
  font-weight: 300;
  display: inline;
`

export default function Formulario({setCurrentImagem, setInputData}) {

  


  const onDropa = (files) => {  

    const blob = new Blob([files[0]]);
            var render = new FileReader()
            render.readAsDataURL(blob)
            render.onload= () =>{
                var base64 = render.result;

                setCurrentImagem(base64);
            }
};

const refIputs = useRef(null)
const componentRef = useRef();

    const data = [
        {id: 'nome', label: 'Nome', defaultValue: ''},
        {id: 'instituicao', label: 'Instituição', defaultValue: 'CEPED - CENTRO PROFISSIONAL DE EDUCAÇÃO A DISTÂNCIA'},
        {id: 'curso', label: 'Curso', defaultValue: ''},
        {id: 'cpf', label: 'CPF', defaultValue: ''},
        {id: 'rg', label: 'RG', defaultValue: ''},
        {id: 'dataNascimento', label: 'Data de nascimento', defaultValue: ''},
        {id: 'cod', label: 'CÓD. Uso', defaultValue: ''},
        {id: 'validade', label: 'Validade', defaultValue: '31/03/2024'},
    ]

    const takeInput = () =>{
      const inputs = refIputs.current.getElementsByTagName("input")

      let valueInputs = {}

        for(let input of inputs){
            valueInputs[input.id] = input.value
        }
        setInputData(valueInputs)
    }

  return (
    <div style={{width: '100%', height: '100%' , display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <div style={{width: '500px', height: '650px', background: '#f4f7f8', padding: '10px 20px'}}>

      
        <h1 style={{fontSize: '18px', textAlign: 'center'}}>Cadastrar dados da carteira</h1>


        <div  style={{display: 'flex', alignItems: 'center', margin: '10px 0px'}}>

          <img style={{width: '25px', height: '25px'}} src={info} alt="Informação" />
          <span style={{marginLeft: '5px'}}>
            Preencha o formulário abaixo com os dados solicitados

          </span>
        </div>
        <div ref={refIputs}>
        {
          data.map((item,index)=>{
            return(
                <div style={{margin: '4px'}} key={index}>
                    <LabelInput for={item.id}>{item.label}</LabelInput>
                    <Input id={item.id} label={item.label} onChange={()=>{takeInput()}} defaultValue={item.defaultValue}/>
                   {/*  <TextField id={item.id} label={item.label} variant="outlined" onChange={()=>{takeInput()}}  /> */}
                </div>
            )
          })  
        }
        </div>
        
        
        <DropFixImage setCurrentImagemProps={setCurrentImagem} />

        {/* <Dropzone onDrop={files => onDropa(files)}>
          {({getRootProps, getInputProps}) => (
              <SectionUpload {...getRootProps()}>
              <Input {...getInputProps()} />

              <Button style={{background: '#2bb673'}} variant="contained" >Upload Image</Button>
                
            </SectionUpload>
          )}
          </Dropzone> */}


          </div>
    </div>
  )
}
