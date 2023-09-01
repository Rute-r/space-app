import { styled } from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.section`
  display: flex;
  gap: 64px;
  align-items: center;
  margin-top: 56px;
`;

const TagTitulo = styled.h3`
  font-size: 24px;
  color: #d9d9d9;
  margin: 0;
`;

const BotaoEstilizado = styled.button`
  color: #fff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = () => {
  return (
    <TagContainer>
      <TagTitulo>Busque por tags:</TagTitulo>

      <Div>
        {tags.map((tag) => (
          <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>
        ))}
      </Div>
    </TagContainer>
  );
};

export default Tags;
