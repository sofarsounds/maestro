import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  circle?: boolean;
  cable?: boolean;
  invert?: boolean;
  width?: string;
  className?: string;
  'data-qaid'?: string;
  id?: string;
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

  const color = invert ? 'white' : 'black';

  return `sofar-${kind}-${color}.svg`;
};

const Logo: React.SFC<Props> = ({
  circle = false,
  cable = false,
  invert = false,
  width,
  className,
  'data-qaid': qaId,
  id
}) => (
  <LogoImg
    id={id}
    data-qaid={qaId}
    className={className}
    alt="Sofar Logo"
    src={require(`../../assets/${generateFileName(circle, cable, invert)}`)}
    width={width}
  />
);

export default Logo;
