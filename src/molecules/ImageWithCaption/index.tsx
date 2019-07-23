import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../atoms/Typography';
import Image from '../../atoms/Image';

interface ImageProps {
  alt?: string;
  src: string;
  caption?: string;
}

const ImageWithCaption: React.SFC<ImageProps> = ({ alt, src, caption }) => (
  <>
    <Image alt={alt} src={src} />
    <Caption>{caption}</Caption>
  </>
);

export default ImageWithCaption;
