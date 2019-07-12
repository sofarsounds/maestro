import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Icon } from '../../src';
import Registry from '../../src/atoms/Icon/registry';

const THEAD = styled.thead`
  background: #f9f9f9;

  th {
    padding: 10px 5px;
  }
`;
const TR = styled.tr`
  td {
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
  }
`;

storiesOf('Iconography', module).add('All', () => (
  <div>
    <table style={{ borderCollapse: 'collapse' }}>
      <THEAD>
        <tr>
          <th style={{ width: '200px', textAlign: 'left' }}>Icon Name</th>
          <th>Icon</th>
        </tr>
      </THEAD>
      <tbody>
        {Object.keys(Registry).map((icon: string) => (
          <TR key={icon}>
            <td>{icon}</td>
            <td>
              <Icon
                name={icon}
                size={text('Size', '16px')}
                colour={text('Colour', '#000')}
              />
            </td>
          </TR>
        ))}
      </tbody>
    </table>
  </div>
));
