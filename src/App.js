
import { TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import FooterDiv from './components/FooterDiv';
import Formulario from './components/Formulario';
import ModelCarteira from './components/ModelCarteira';
import MobileCarteira2 from './components/ModelCarteira/MobileCarteira2';
import Teste from './components/Teste';

export const DivApp = styled.div`
   
  display: flex;
  background: #ebebeb;

    > div:nth-child(1){
        width: 50%;
        height: calc(100vh);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > div:nth-child(2){
        width: 50%;
        height: calc(100vh);
    }

  @media (max-width: 1000px) { 
    flex-direction: column-reverse;

    > div:nth-child(1){
        width: 100%;
        height: 100%;
        margin: 20px 0px;
    }

    > div:nth-child(2){
        width: 100%;
        height: 100%;
        margin-bottom: 100px;
    }
  }

 
`

function App() {
  const [currentImagem, setCurrentImagem] = useState([]); //[] - localStorage.getItem('userImgPerfil')
  const [inputData, setInputData] = useState({});
  const [resolution, setResolution] = useState(false); //false  - true
  const [selectedModel, setSelectedModel] =  useState(1)

  const [open, setOpen] = useState(false); // false - true

  const componentRefModile1 = useRef();

  useEffect(()=>{
    if (window.screen.width < 640 || window.screen.height < 480) {
      setResolution(true)
        // sirva a versão pra celular
    } else if (window.screen.width < 1024 || window.screen.height < 768) {
      setResolution(false)
        // talvez seja uma boa usar versão pra tablet
    } else {
      setResolution(false)
        // sirva a versão normal
    }

  },[])

  return (
    <div > 
      <div style={{display: `${open ? 'flex' : 'none'}`}}>

        {selectedModel === 1 ?
          <Teste componentRefModile1={componentRefModile1} resolution={resolution} inputData={inputData} currentImagem={currentImagem} />
         :
          <MobileCarteira2 componentRefModile1={componentRefModile1} resolution={resolution} inputData={inputData} currentImagem={currentImagem} />
        }
       
      </div>

      
      <DivApp style={{display: `${open ? 'none' : 'flex'}`}} className="App">
     
      <div>
        <ModelCarteira selectedModel={selectedModel} setSelectedModel={setSelectedModel} resolution={resolution} componentRefModile1={componentRefModile1} open={open} setOpen={setOpen} inputData={inputData} currentImagem={currentImagem}/>
      </div>
      <div>
       <Formulario setInputData={setInputData} setCurrentImagem={setCurrentImagem} />
      </div> 
      </DivApp> 
    </div>
  );
}

export default App;
