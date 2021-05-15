import React, { useState, useEffect, useCallback } from 'react';
import LoaderContent from '../../../LoaderComponet';
import api from '../../../services/api'
import { Container } from './style'

function App() {
  const [photo, setPhoto] = useState<string>('')
  const [isLoad, setIsLoad] = useState<boolean>(false)

  function hadleLoad(state: boolean) {
    return setIsLoad(!state)
  }
  useEffect(() => {
    setIsLoad(true)
    api.get('random').then(res => {
      setPhoto(res.data.message)
      setIsLoad(false)
    })
  }, []);

  const handleSortImage: any = useCallback(() => {
    setIsLoad(true)
    api.get('random').then(res => {
      setPhoto(res.data.message)
      setIsLoad(false)

    })
  }, [photo]) //assim memoriza a funcao

  function handleSortImage2() {
    setIsLoad(true)
    api.get('random').then(res => {
      setPhoto(res.data.message)
      setIsLoad(false)

    })
  }
  return (
    <Container>
      <div className="content">


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
            <h1>Fotos de Cães</h1>
            <h4>Escolha a melhor</h4>
            <button onClick={handleSortImage}>Clique Aqui para Ver</button>
          </div>

          {
            isLoad ? <LoaderContent /> : <img src={photo} alt="dog" style={{ width: 400, height: 400 }} />
          }
        </div>
      </div>
    </Container>

  );
}

export default App;

