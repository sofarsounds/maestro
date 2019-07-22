import React from 'react';
import { mountWithTheme } from '../../test';

import Image from './index';

describe('<Image />', () => {
  it('has the correct style attributes', () => {
    const img = mountWithTheme(<Image src="img.png" />);
    expect(img).toHaveStyleRule('border-radius', '2px');

    expect(img).toHaveStyleRule('width', '100%');
  });
});
