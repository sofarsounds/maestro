import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, H4 } from '../../atoms/Typography';
import Spacer from '../../atoms/Spacer';

interface Props {
  height?: string;
  imageURL: string;
  title: string;
  subtitle?: string;
  children?: any;
}

interface WrapperProps {
  height: string;
  imageURL: string;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ imageURL, height }) => css`
    background-position: center;
    background-size: cover;
    background-image: url(${imageURL});
    height: ${height};
  `}
`;

export const LightBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const HeroImage: React.SFC<Props> = ({
  height = '300px',
  imageURL,
  title,
  subtitle,
  children
}) => (
  <Wrapper height={height} imageURL={imageURL}>
    <LightBox>
      <div style={{ textAlign: 'center' }}>
        <Title colour="#fff" align="center">
          {title}
        </Title>
        {subtitle && (
          <H4 colour="#fff" align="center">
            {subtitle}
          </H4>
        )}
        {children && <Spacer mt={4}>{children}</Spacer>}
      </div>
    </LightBox>
  </Wrapper>
);

export default HeroImage;
