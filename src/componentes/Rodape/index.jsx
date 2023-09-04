import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #04244f;
  margin-top: 73px;
`;

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 163px;
  li {
    img {
      width: 24px;
    }
  }
`;

const TextoRodape = styled.p`
  font-size: 16px;
  color: #fff;
  margin-right: 24px;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <IconesContainer>
        <li>
          <a href="/">
            <img src="/imagens/sociais/facebook.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="/">
            <img src="/imagens/sociais/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/imagens/sociais/instagram.svg" alt="" />
          </a>
        </li>
      </IconesContainer>
      <TextoRodape>Desenvolvido por Alura.</TextoRodape>
    </RodapeEstilizado>
  );
};

export default Rodape;
