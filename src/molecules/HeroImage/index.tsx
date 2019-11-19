import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, H4 } from '../../atoms/Typography';
import Spacer from '../../atoms/Spacer';

interface Props {
  height?: string;
  imageURL: string | string[];
  title: string;
  subtitle?: string;
  parallax?: boolean;
  children?: any;
  'data-qaid'?: string;
  id?: string;
}

interface WrapperProps {
  height: string;
  imageURL: string | string[];
  parallax: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, imageURL, parallax, height }) => css`
    background-position: center;
    background-size: cover;
    height: ${height};
    ${!Array.isArray(imageURL) &&
      css`
        background-image: url(${typeof imageURL === 'string'
          ? imageURL
          : null});
      `}

      ${Array.isArray(imageURL) &&
        theme.media.xs`
          background-image: url(${imageURL[0]});
        `}

      ${Array.isArray(imageURL) &&
        theme.media.sm`
          background-image: url(${imageURL[1]});
        `}

      ${Array.isArray(imageURL) &&
        theme.media.md`
          background-image: url(${imageURL[2]});
        `}

      ${Array.isArray(imageURL) &&
        theme.media.lg`
          background-image: url(${imageURL[3]});
        `}

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
  'data-qaid': qaId,
  id
}) => (
  <Wrapper
    id={id}
    data-qaid={qaId}
    parallax={parallax}
    height={height}
    imageURL={imageURL}
  >
    <LightBox>
      <div style={{ textAlign: 'center' }}>
        <Title color="#fff" align="center" spaceAfter={5}>
          {title}
        </Title>
        {subtitle && (
          <H4 color="#fff" align="center">
            {subtitle}
          </H4>
        )}
        {children && <Spacer mt={4}>{children}</Spacer>}
      </div>
    </LightBox>
  </Wrapper>
);

export default HeroImage;
