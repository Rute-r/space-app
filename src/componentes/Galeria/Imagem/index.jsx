import { styled } from 'styled-components';
import favorito from '/icones/favorito.png';
import expandir from '/icones/expandir.png';

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : '460px')};
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotaoIcone = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Imagem = ({ foto }) => {
  return (
    <Figure>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <p>{foto.fonte}</p>
          <BotaoIcone>
            <img src={favorito} alt="icone de favoritar" />
          </BotaoIcone>
          <BotaoIcone>
            <img src={expandir} alt="icone de expandir" />
          </BotaoIcone>
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
