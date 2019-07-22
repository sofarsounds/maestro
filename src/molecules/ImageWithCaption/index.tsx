import React from 'react';
import styled, { css } from 'styled-components';
import { Caption } from '../../atoms/Typography';

interface ImageProps {
  alt?: string;
  src: string;
  caption?: string;
}

const Wrapper = styled.div`
  text-align: center;
`

const Image = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    width: 100%;
  `}
`;

const ImageWithCaption: React.SFC<ImageProps> = ({ alt, src, caption }) => (
  <Wrapper>
    <Image alt={alt} src={src} />
    <Caption>{caption}</Caption>
  </Wrapper>
);

export default ImageWithCaption;

