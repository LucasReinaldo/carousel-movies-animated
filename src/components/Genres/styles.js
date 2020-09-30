import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4px 0;
`;

export const Genre = styled.View`
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 16px;
  margin: 0 4px 0 4px;
`;

export const GenreText = styled.Text`
  font-size: 10px;
  opacity: 0.4;
`;
