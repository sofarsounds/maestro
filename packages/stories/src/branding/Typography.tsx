import React from 'react';
import styled from 'styled-components';

import {
  Title,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle,
  Subtitle2,
  Body,
  Body2,
  Overline,
  Caption
} from '../../../uikit/src';

const Boundary = styled.div`
  margin: 0 0 25px 0;
  padding: 0;
  border: 1px dashed #ccc;
`;

const Spacer = styled.div`
  height: 25px;
`;

const headingTags = [H1, H2, H3, H4, H5, H6];
const subtitleTags = [Subtitle, Subtitle2];
const bodyTags = [Body, Body2];

export default () => (
  <>
    <Boundary>
      <Title>Title Tag</Title>
    </Boundary>

    {headingTags.map((T: any, key: number) => (
      <Boundary key={key}>
        <T>Heading {key + 1}</T>
      </Boundary>
    ))}

    <Spacer />

    {subtitleTags.map((T: any, key: number) => (
      <Boundary key={key}>
        <T>Subtitle {key + 1}</T>
      </Boundary>
    ))}

    <Spacer />

    {bodyTags.map((T: any, key: number) => (
      <Boundary key={key}>
        <T>Body {key + 1}</T>
      </Boundary>
    ))}
    <Boundary>
      <Overline>Overline Tag</Overline>
    </Boundary>
    <Boundary>
      <Caption>Caption Tag</Caption>
    </Boundary>
  </>
);
