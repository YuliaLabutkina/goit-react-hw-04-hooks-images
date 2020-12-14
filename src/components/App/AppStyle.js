import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: red;
  font-size: 32px;
`;

export { Container, ErrorText };
