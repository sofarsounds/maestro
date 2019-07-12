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
  Body,
  Body2,
  Overline,
  Caption
} from 'uikit';

import { Boundary as Bound } from '../helpers/components';

const Boundary = styled(Bound)`
  margin-bottom: 25px;
`;

const Spacer = styled.div`
  height: 25px;
`;

const headingTags = [H1, H2, H3, H4, H5, H6];
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
