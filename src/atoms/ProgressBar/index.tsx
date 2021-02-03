import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import { Colors } from '../../typings/theme';

interface Props {
  percentage?: number;
  color?: Colors;
  width?: string;
}

interface InnerProps {
  percentage?: number;
  color?: Colors;
}

const InnerBar = styled.div<InnerProps>`
  ${({ percentage = 0, theme, color = 'blueSmoke' }) => css`
    background-color: ${theme.colors[color]};
    height: 100%;
    width: ${percentage}%;
    transition: width 0.2s;
  `};
`;

const Container = styled.div<{ width?: string }>`
  ${({ theme, width = '120px' }) => css`
    background-color: ${theme.colors.macyGrey};
    width: ${width};
    height: 16px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  `};
`;

const ProgressBar = (props: Props) => {
  const { percentage, width, color } = props;
  return (
    <Container width={width}>
      <InnerBar color={color} percentage={percentage} data-qaid="inner-bar" />
    </Container>
  );
};

export default ProgressBar;
