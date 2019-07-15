import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  circle?: boolean;
  cable?: boolean;
  invert?: boolean;
  width?: string;
  'data-qaid'?: string;
}

const LogoImg = styled.img`
  ${({ width }) => css`
    width: ${width || '100%'};
    margin: 0;
  `}
`;

const generateFileName = (circle: boolean, cable: boolean, invert: boolean) => {
  let kind = 'logo';
  if (circle) {
    kind = 'circle';
  }
  if (cable) {
    kind = 'cable';
  }

  const colour = invert ? 'white' : 'black';

  return `sofar-${kind}-${colour}.svg`;
};

const Logo: React.SFC<Props> = ({
  circle = false,
  cable = false,
  invert = false,
  width,
  'data-qaid': qaId
}) => (
  <LogoImg
    data-qaid={qaId}
    alt="Sofar Logo"
    src={require(`../../assets/${generateFileName(circle, cable, invert)}`)}
    width={width}
  />
);

export default Logo;
