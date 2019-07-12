import React from 'react';
import { mount } from 'enzyme';
import { checkStyleRules } from '../../test';

import Blocks, { Animation } from './index';

describe('<LoadingBlocks />', () => {
  it('animation has the correct style rules', () => {
    const animation = mount(<Animation />);

    checkStyleRules(animation, {
      'animation-duration': '1.25s',
      'animation-fill-mode': 'forwards',
      'animation-iteration-count': 'infinite',
      'animation-timing-function': 'linear',
      'background-size': '4000px 104px',
      background:
        'linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%)',
      position: 'relative'
    });
  });

  it('<Box /> has the correct style rules', () => {
    const el = mount(<Blocks.Box width="20px" />);

    checkStyleRules(el, {
      width: '20px',
      height: '20px'
    });
  });

  it('<Circle /> has the correct style rules', () => {
    const el = mount(<Blocks.Circle width="20px" />);

    checkStyleRules(el, {
      width: '20px',
      height: '20px',
      'border-radius': '100%'
    });
  });

  it('<Rectangle /> has the correct style rules', () => {
    const el = mount(<Blocks.Rectangle width="20px" height="50px" />);

    checkStyleRules(el, {
      width: '20px',
      height: '50px'
    });
  });
});
