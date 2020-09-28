import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, H4 } from '../../atoms/Typography';
import Spacer from '../../atoms/Spacer';

import { breakPoints } from '../../theme';
import Theme from '../../typings/theme';

interface Props {
  height?: string;
  imageURL?: string;
  images?: ImagesObj;
  title: string;
  subtitle?: string;
  parallax?: boolean;
  children?: any;
  'data-qaid'?: string;
  id?: string;
}

interface ImagesObj {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface WrapperProps {
  height: string;
  imageURL?: string;
  images?: ImagesObj;
  parallax: boolean;
}

const breakPointsKeys = Object.keys(breakPoints);

const largerImage = (size: string, images: ImagesObj) => {
  const sizeIndex = breakPointsKeys.findIndex((key: string) => size === key);
  const largerImageIndex = Array.from(
    Array(breakPointsKeys.length - sizeIndex - 1),
    (_x, i) => i + 1
  ).find(key => images[breakPointsKeys[sizeIndex + key]]);

  if (largerImageIndex) {
    return images[breakPointsKeys[largerImageIndex + sizeIndex]];
  }
};

const setMediaQuery = (size: string, images: ImagesObj, theme: Theme) => {
  const largerImageUrl = largerImage(size, images);
  if (!images[size] && !largerImageUrl) {
    return;
  }
  return theme.media[size]`
  background-image: url(${images[size] || largerImageUrl});
`;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, imageURL, images, parallax, height }) => css`
    background-position: center;
    background-size: cover;
    height: ${height};
    ${imageURL &&
      css`
        background-image: url(${imageURL});
      `}

    ${images && setMediaQuery('xs', images, theme)}
    ${images && setMediaQuery('sm', images, theme)}
    ${images && setMediaQuery('md', images, theme)}
    ${images && setMediaQuery('lg', images, theme)}
    ${images && setMediaQuery('xl', images, theme)}

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
  images,
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
    images={images}
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
