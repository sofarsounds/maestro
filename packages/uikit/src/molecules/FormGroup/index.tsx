import React from 'react';
import styled from '../../lib/styledComponents';

import { FormGroupLabel, Caption } from '../../atoms/Typography';
import theme from '../../theme';

interface Props {
  label: string;
  required?: boolean;
  errorMsg?: string;
  children: any;
}

const FormGroupWrapper = styled.div``;

const FormGroup: React.SFC<Props> = ({
  label,
  required,
  children,
  errorMsg
}) => (
  <FormGroupWrapper>
    <FormGroupLabel>
      {label} {required ? '*' : null}
    </FormGroupLabel>
    {React.cloneElement(children, { hasError: !!errorMsg })}
    {errorMsg && (
      <Caption colour={theme.colours.redRedWine}>{errorMsg}</Caption>
    )}
  </FormGroupWrapper>
);

export default FormGroup;
