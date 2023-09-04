import Titulo from '../../Titulo';
import { styled } from 'styled-components';
import fotos from './fotos-populares.json';

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Botao = styled.button`
  background-color: transparent;
  width: 100%;
  color: #fff;
  border: 2px solid #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 24px;
`;

const Imagem = styled.img`
  width: 212px;
  border-radius: 20px;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((fotos) => (
          <Imagem src={fotos.path} key={fotos.id} alt={fotos.path} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
