import React from 'react';
import { mountWithTheme } from '../../test';

import Grid, { Col } from './index';

describe('Grid', () => {
  it('renders the Grid correctly', () => {
    const grid = mountWithTheme(
      <Grid>
        <Col xs={12} sm={4} md={4} lg={4}>
          Col 1
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          Col 2
        </Col>
      </Grid>
    );

    expect(grid).toMatchSnapshot();
  });

  it('renders a Grid with a custom gap', () => {
    const grid = mountWithTheme(
      <Grid gap="100px">
        <Col>Col 1</Col>
        <Col>Col 2</Col>
      </Grid>
    );

    expect(grid).toMatchSnapshot();
  });

  it('renders a grid with custom start points', () => {
    const grid = mountWithTheme(
      <Grid>
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xsStart={4}
          mdStart={4}
          smStart={4}
          lgStart={4}
        >
          Col 1 / Row 1
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          Col 1 / Row 2
        </Col>
      </Grid>
    );

    expect(grid).toMatchSnapshot();
  });
});
