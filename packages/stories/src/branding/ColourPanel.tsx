import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  column-gap: 20px;
  margin-bottom: 50px;
`;

const Panel = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  background: #fff;
  border-radius: 2px;
`;

const Heading = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const Colour = styled.div<any>`
  height: 50px;
  background: ${({ bg }) => bg};
`;

const Footer = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const ColourPanel: React.SFC<any> = ({ colourName, hex }) => (
  <Panel>
    <Heading>{colourName}</Heading>
    <Footer>{hex}</Footer>
    <Colour bg={hex} />
  </Panel>
);

export default ColourPanel;
