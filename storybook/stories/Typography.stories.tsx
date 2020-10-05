import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

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
  Anchor,
  Caption,
  theme
} from '../../src';

import { Boundary as Bound } from '../helpers/components';

const Boundary = styled(Bound)`
  margin-bottom: 25px;
`;

export const DataTable = styled.table`
  border-collapse: collapse;
`;

export const TH = styled.th`
  border-bottom: 2px SOLID #cccccc;
  min-width: 150px;
  text-align: left;
  padding: 4px;
`;

export const TD = styled.td`
  border-bottom: 1px SOLID #cccccc;
  padding: 4px;
`;

const headingTags = [H1, H2, H3, H4, H5, H6];
const bodyTags = [Body, Body2];

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=6%3A2',
    },
  })
  .add('Size Guide', () => (
    <DataTable>
      <thead>
        <tr>
          <TH>Type</TH>
          <TH>Large</TH>
          <TH>Medium</TH>
          <TH>Small & Xtra Small</TH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TD>Title</TD>
          <TD>{theme.fontSizes.title.lg}</TD>
          <TD>{theme.fontSizes.title.md}</TD>
          <TD>{theme.fontSizes.title.xs}</TD>
        </tr>
        <tr>
          <TD>H1</TD>
          <TD>{theme.fontSizes.h1.lg}</TD>
          <TD>{theme.fontSizes.h1.md}</TD>
          <TD>{theme.fontSizes.h1.xs}</TD>
        </tr>
        <tr>
          <TD>H2</TD>
          <TD>{theme.fontSizes.h2.lg}</TD>
          <TD>{theme.fontSizes.h2.md}</TD>
          <TD>{theme.fontSizes.h2.xs}</TD>
        </tr>
        <tr>
          <TD>H3</TD>
          <TD>{theme.fontSizes.h3.lg}</TD>
          <TD>{theme.fontSizes.h3.md}</TD>
          <TD>{theme.fontSizes.h3.xs}</TD>
        </tr>
        <tr>
          <TD>H4</TD>
          <TD>{theme.fontSizes.h4.lg}</TD>
          <TD>{theme.fontSizes.h4.md}</TD>
          <TD>{theme.fontSizes.h4.xs}</TD>
        </tr>
        <tr>
          <TD>H5</TD>
          <TD>{theme.fontSizes.h5.lg}</TD>
          <TD>{theme.fontSizes.h5.md}</TD>
          <TD>{theme.fontSizes.h5.xs}</TD>
        </tr>
        <tr>
          <TD>H6</TD>
          <TD>{theme.fontSizes.h6.lg}</TD>
          <TD>{theme.fontSizes.h6.md}</TD>
          <TD>{theme.fontSizes.h6.xs}</TD>
        </tr>
        <tr>
          <TD>Body1</TD>
          <TD>{theme.fontSizes.body1}</TD>
          <TD>{theme.fontSizes.body1}</TD>
          <TD>{theme.fontSizes.body1}</TD>
        </tr>
        <tr>
          <TD>Body2</TD>
          <TD>{theme.fontSizes.body2}</TD>
          <TD>{theme.fontSizes.body2}</TD>
          <TD>{theme.fontSizes.body2}</TD>
        </tr>
        <tr>
          <TD>Overline</TD>
          <TD>{theme.fontSizes.overline}</TD>
          <TD>{theme.fontSizes.overline}</TD>
          <TD>{theme.fontSizes.overline}</TD>
        </tr>
        <tr>
          <TD>Caption</TD>
          <TD>{theme.fontSizes.caption}</TD>
          <TD>{theme.fontSizes.caption}</TD>
          <TD>{theme.fontSizes.caption}</TD>
        </tr>
      </tbody>
    </DataTable>
  ))
  .add('Title', () => (
    <>
      <h1>Titles</h1>
      <Boundary>
        <Title>{text('Content', 'I am a title element')}</Title>
      </Boundary>
    </>
  ))
  .add('Headings', () => (
    <>
      <h1>Headings</h1>
      {headingTags.map((T: any, key: number) => (
        <Boundary key={key}>
          <T>Heading {key + 1}</T>
        </Boundary>
      ))}
    </>
  ))
  .add('Body', () => (
    <>
      <h1>Body Tags</h1>
      {bodyTags.map((T: any, key: number) => (
        <Boundary key={key}>
          <T spaceAfter={number('SpaceAfter', 0)}>Body {key + 1}</T>
        </Boundary>
      ))}
      <Boundary>
        <Overline spaceAfter={number('SpaceAfter', 0)}>Overline Tag</Overline>
      </Boundary>
      <Boundary>
        <Anchor spaceAfter={number('SpaceAfter', 0)}>Anchor Tag</Anchor>
      </Boundary>
      <Boundary>
        <Caption spaceAfter={number('SpaceAfter', 0)}>Caption Tag</Caption>
      </Boundary>
    </>
  ));
