import { styled } from 'styled-components';
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from './componentes/Cabecalho';
import BarraLateral from './componentes/BarraLateral';
import Banner from './componentes/Banner';
import backgroundImage from './assets/banner.png';
import Galeria from './componentes/Galeria';

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
  gap: 70px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={backgroundImage} texto={'A galeria mais completa de fotos do espaço!'} />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
