import React from 'react';
import { mountWithTheme } from '../../test';

import ProgressBar from './index';

describe('<Image />', () => {
  it('renders correctly with color and percentage props', () => {
    const progressBar = mountWithTheme(
      <ProgressBar color="purplePills" percentage={32} />
    );

    expect(progressBar).toMatchSnapshot();
  });

  it('renders correctly with width prop also supplied', () => {
    const progressBar = mountWithTheme(
      <ProgressBar color="purplePills" percentage={32} width="200px" />
    );

    expect(progressBar).toMatchSnapshot();
  });
});
