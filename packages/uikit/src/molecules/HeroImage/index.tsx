import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, H4 } from '../../atoms/Typography';
import Spacer from '../../atoms/Spacer';

interface Props {
  height?: string;
  imageURL: string;
  title: string;
  subtitle?: string;
  parallax?: boolean;
  children?: any;
  'data-qaid'?: string;
}

interface WrapperProps {
  height: string;
  imageURL: string;
  parallax: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ imageURL, parallax, height }) => css`
    background-position: center;
    background-size: cover;
    background-image: url(${imageURL});
    height: ${height};

    ${parallax &&
      css`
        position: relative;
        background-attachment: fixed;
      `}
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
  parallax = false,
  children,
  'data-qaid': qaId
}) => (
  <Wrapper
    data-qaid={qaId}
    parallax={parallax}
    height={height}
    imageURL={imageURL}
  >
    <LightBox>
      <div style={{ textAlign: 'center' }}>
        <Title colour="#fff" align="center" spaceAfter={5}>
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
