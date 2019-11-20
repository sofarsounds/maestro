import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, H4 } from '../../atoms/Typography';
import Spacer from '../../atoms/Spacer';

import { breakPoints } from '../../theme';

interface Props {
  height?: string;
  imageURL: string | ImageURLObj;
  title: string;
  subtitle?: string;
  parallax?: boolean;
  children?: any;
  'data-qaid'?: string;
  id?: string;
}

interface ImageURLObj {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface WrapperProps {
  height: string;
  imageURL: string | ImageURLObj;
  parallax: boolean;
}

const isObject = (imageURL: string | ImageURLObj) =>
  typeof imageURL === 'object' && imageURL !== null;

const breakPointsKeys = Object.keys(breakPoints);

const largerImage = (size: string, imageURL: string | ImageURLObj) => {
  const sizeIndex = breakPointsKeys.findIndex((key: string) => size === key);
  const largerImageIndex = Array.from(
    Array(breakPointsKeys.length - sizeIndex - 1),
    (x, i) => i + 1
  ).find(key => imageURL[breakPointsKeys[sizeIndex + key]]);

  if (largerImageIndex) {
    return imageURL[breakPointsKeys[largerImageIndex + sizeIndex]];
  }
};

const setMediaQuery = (
  size: string,
  imageURL: string | ImageURLObj,
  theme: any
) => {
  const largerImageUrl = largerImage(size, imageURL);
  if (!isObject(imageURL) || (!imageURL[size] && !largerImageUrl)) {
    return;
  }
  return theme.media[size]`
  background-image: url(${imageURL[size] || largerImageUrl});
`;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, imageURL, parallax, height }) => css`
    background-position: center;
    background-size: cover;
    height: ${height};
    ${!isObject(imageURL) &&
      css`
        background-image: url(${typeof imageURL === 'string'
          ? imageURL
          : undefined});
      `}

    ${setMediaQuery('xs', imageURL, theme)}
    ${setMediaQuery('sm', imageURL, theme)}
    ${setMediaQuery('md', imageURL, theme)}
    ${setMediaQuery('lg', imageURL, theme)}
    ${setMediaQuery('xl', imageURL, theme)}

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
