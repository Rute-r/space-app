import { styled } from 'styled-components';
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';
import backgroundImage from './assets/banner.png';
import Galeria from './componentes/Galeria';
import { useState } from 'react';

import fotos from './fotos.json';
import ModalZoom from './componentes/ModalZoom';

const FundoGradiente = styled.div`
  background: linear-gradient(179deg, #041833 0%, #04244f 47.35%, #154580 100%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    setFotosDaGaleria(
      fotos.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : foto.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={backgroundImage} texto={'A galeria mais completa de fotos do espaço!'} />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>

      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} />
    </FundoGradiente>
  );
};

export default App;
