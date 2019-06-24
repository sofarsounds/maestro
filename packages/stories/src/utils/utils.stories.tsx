import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Grid, Col, withShadow } from 'uikit';

const Block = styled<any>(Col)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${withShadow};
`;

storiesOf('04 / Utils|withShadow', module).add('withShadow', () => (
  <Grid gap="50px">
    {[1, 2, 3, 4, 5].map(d => (
      <Block sm={4} md={2} depth={d}>
        depth = {d}
      </Block>
    ))}
  </Grid>
));
