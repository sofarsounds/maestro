import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import { Colors } from '../../typings/theme';

interface Props {
  percentage?: number;
  width?: string;
  color?: Colors;
  unfilledColor?: Colors;
}

interface InnerBarProps {
  percentage?: number;
  color?: Colors;
}

interface ContainerProps {
  width?: string;
  color?: Colors;
}

const InnerBar = styled.div<InnerBarProps>`
  ${({ theme, percentage = 0, color = 'blueSmoke' }) => css`
    background-color: ${theme.colors[color]};
    height: 100%;
    width: ${percentage}%;
    transition: width 0.2s;
  `};
`;

const Container = styled.div<ContainerProps>`
  ${({ theme, width = '120px', color = 'macyGrey' }) => css`
    background-color: ${theme.colors[color]};
    width: ${width};
    height: 16px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  `};
`;

const ProgressBar = (props: Props) => {
  const { percentage, width, color, unfilledColor } = props;
  return (
    <Container width={width} color={unfilledColor}>
      <InnerBar color={color} percentage={percentage} data-qaid="inner-bar" />
    </Container>
  );
};

export default ProgressBar;
