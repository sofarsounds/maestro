import React from 'react';
import styled, { css } from 'styled-components';

interface ImageProps {
  alt?: string;
  src: string;
  caption?: string;
}

const Image = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    width: 100%;
  `}
`;

const Caption = styled.div`
  ${({ theme }) => css`
    color: ${theme.colours.backToBlack},
    font-size: 10px;
    width: 100%;
    text-align: center;
    margin-top: 4px;
  `}
`;

const ImageWithCaption: React.SFC<ImageProps> = ({ alt, src, caption }) => (
  <>
    <Image alt={alt} src={src} />
    <Caption>{caption}</Caption>
  </>
);

export default ImageWithCaption;
