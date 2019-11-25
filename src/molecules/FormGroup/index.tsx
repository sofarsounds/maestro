import React from 'react';
import styled from '../../lib/styledComponents';

import { FormGroupLabel, Caption } from '../../atoms/Typography';
import theme from '../../theme';

interface Props {
  label: string;
  required?: boolean;
  errorMsg?: string;
  children: any;
  renderIcon?: Function;
  'data-qaid'?: string;
  id?: string;
}

const FormGroupWrapper = styled.div``;

const FormGroup: React.SFC<Props> = ({
  label,
  required,
  children,
  errorMsg,
  renderIcon,
  'data-qaid': qaId,
  id
}) => (
  <FormGroupWrapper id={id} data-qaid={qaId}>
    <FormGroupLabel
      color={errorMsg ? theme.colors.redRedWine : undefined}
      data-qaid={`${qaId}-label`}
    >
      {label}
      {required ? (
        <span
          style={{
            color: errorMsg ? theme.colors.redRedWine : theme.colors.green700
          }}
        >
          *
        </span>
      ) : null}{' '}
      {renderIcon ? renderIcon() : null}
    </FormGroupLabel>
    {React.cloneElement(children, { hasError: !!errorMsg })}
    {errorMsg && (
      <Caption color={theme.colors.redRedWine} data-qaid={`${qaId}-error`}>
        {errorMsg}
      </Caption>
    )}
  </FormGroupWrapper>
);

export default FormGroup;
