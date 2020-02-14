import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { Icon, Select, SelectState, MenuItem } from '../../src';

import { cities, multiDimensional, MultiDimensional } from '../helpers/cities';
import { Spacer, Boundary } from '../helpers/components';

const defaultProps = {
  onChange: action('Option selected'),
  placeholder: 'Select City',
  options: multiDimensional,
  getOptionLabel: (opt: any) => opt.title
};

const staticExamples = [
  {
    title: 'Default',
    props: defaultProps
  },
  {
    title: 'Scaling',
    props: {
      ...defaultProps,
      initialWidth: '150px'
    }
  },
  {
    title: 'Grouped',
    props: {
      ...defaultProps,
      groupBy: (o: any) => o.title.slice(0, 1)
    }
  },
  {
    title: 'With defaultValue',
    props: {
      ...defaultProps,
      defaultValue: multiDimensional[12]
    }
  },
  {
    title: 'With advanced getOptionLabel',
    props: {
      ...defaultProps,
      getOptionLabel: (opt: any) => `${opt.title}, ${opt.country}`
    }
  },
  {
    title: 'With renderLeftIcon',
    props: {
      ...defaultProps,
      renderLeftIcon: <Icon name="helpCircleOutline" />
    }
  },
  {
    title: 'With renderOption',
    props: {
      ...defaultProps,
      renderOption: (option: any, props: any) => (
        <MenuItem {...props}>
          🇬🇧 {option.title}
          <span style={{ color: '#ccc' }}>, {option.country}</span>
        </MenuItem>
      )
    }
  },
  {
    title: 'Loading',
    props: {
      ...defaultProps,
      state: SelectState.loading
    }
  },
  {
    title: 'Error',
    props: {
      ...defaultProps,
      state: SelectState.error
    }
  }
];

const defaultTypeaheadProps = {
  ...defaultProps,
  searchable: true
};
const typeaheadExamples = [
  {
    title: 'Static',
    props: defaultTypeaheadProps
  },
  {
    title: 'Grouped',
    props: {
      ...defaultTypeaheadProps,
      groupBy: (o: any) => o.title.slice(0, 1)
    }
  },
  {
    title: 'Popular Options',
    props: {
      ...defaultTypeaheadProps,
      popularOptions: multiDimensional.slice(0, 5),
      getPopularOptionsTitle: (o: any) => `Top ${o.length} cities:`
    }
  },

  {
    title: 'Popular Options with grouped options',
    props: {
      ...defaultTypeaheadProps,
      popularOptions: multiDimensional.slice(0, 5),
      getPopularOptionsTitle: (o: any) => `Top ${o.length} cities:`,
      groupBy: (o: any) => o.title.slice(0, 1)
    }
  }
];

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Standard', () => (
    <div style={{ paddingBottom: '500px' }}>
      <h1>Select</h1>

      {staticExamples.map(e => (
        <>
          <h2>{e.title}</h2>

          <div style={{ width: '100%', display: 'flex' }}>
            <Boundary
              style={{ width: '300px', padding: '20px', marginRight: '10px' }}
            >
              <Select<MultiDimensional> {...e.props} />
            </Boundary>

            <Boundary
              style={{ background: '#000', width: '300px', padding: '20px' }}
            >
              <Select<MultiDimensional> invertColor {...e.props} />
            </Boundary>
          </div>

          <Spacer />
        </>
      ))}
    </div>
  ))
  .add('Typeahead', () => (
    <div style={{ paddingBottom: '500px' }}>
      <h1>Typeahead</h1>

      {typeaheadExamples.map(e => (
        <>
          <h2>{e.title}</h2>

          <div style={{ width: '100%', display: 'flex' }}>
            <Boundary
              style={{ width: '300px', padding: '20px', marginRight: '10px' }}
            >
              <Select<MultiDimensional> {...e.props} />
            </Boundary>

            <Boundary
              style={{ background: '#000', width: '300px', padding: '20px' }}
            >
              <Select<MultiDimensional> invertColor {...e.props} />
            </Boundary>
          </div>

          <Spacer />
        </>
      ))}
    </div>
  ));
