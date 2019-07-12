import styled from 'styled-components';

export const Boundary = styled.div`
  border: 1px dashed #ccc;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
`;

export const Inversion = styled(Row)`
  background: #000;
`;

export const Container = styled.div`
  width: 100px;
  margin: 0 50px;
`;
