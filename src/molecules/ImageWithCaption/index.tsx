import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../atoms/Typography';
import Image from '../../atoms/Image';

interface ImageProps {
  alt?: string;
  src: string;
  caption?: string;
}

const Wrapper = styled.div`
  text-align: center;
`;

const ImageWithCaption: React.SFC<ImageProps> = ({ alt, src, caption }) => (
  <Wrapper>
    <Image alt={alt} src={src} />
    <Caption>{caption}</Caption>
  </Wrapper>
);

export default ImageWithCaption;
