import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

configure({ testIdAttribute: 'data-qaid' });

jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js');

  return class {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {},
        scheduleUpdate: () => {}
      };
    }
  };
});

Enzyme.configure({ adapter: new Adapter() });
