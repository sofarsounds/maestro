import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import { Colors } from '../../typings/theme';

const LabelWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.whiteDenim};
    padding: ${theme.ruler[2]}px;
    height: ${theme.ruler[12]}px;
    border-radius: ${theme.ruler[6]}px;
    font-size: 14px;
    display: flex;
    width: 160px;
  `}
`;

const IconLabelText = styled.div<IconLabelTextProps>`
  ${({ theme, draft }) => css`
    padding: ${theme.ruler[2]}px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    ${draft &&
      css`
        color: ${theme.colors.macyGrey};
      `}
  `}
`;

const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: inherit;
    max-width: ${theme.ruler[8]}px;
    height: ${theme.ruler[8]}px;
    border-radius: ${theme.ruler[4]}px;
    overflow: hidden;
  `}
`;

const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, color, inverted }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.ruler[8]}px;
    height: ${theme.ruler[8]}px;
    border-radius: ${theme.ruler[4]}px;
    padding: ${theme.ruler[2]}px;
    background-color: ${theme.colors[inverted ? color : 'whiteDenim']};
    color: ${theme.colors[inverted ? 'whiteDenim' : color]};

    i::before {
      color: ${theme.colors[inverted ? 'whiteDenim' : color]};
    }

    ${!inverted &&
      css`
        border: 1px solid ${theme.colors[color]};
      `}
  `}
`;

interface Props {
  icon?: string;
  iconSize?: string;
  imageUrl?: string;
  labelText?: string;
  onClick?: any;
  draft?: boolean;
  color?: Colors;
  invertIcon?: boolean;
}

interface IconWrapperProps {
  color: Colors;
  inverted: boolean;
}

interface IconLabelTextProps {
  draft: boolean;
}

const truncateText = (text: string, length: number) =>
  text.length > length ? `${text.substring(0, length).trim()}...` : text;

const IconLabel: React.SFC<Props> = ({
  icon,
  iconSize = '14px',
  color,
  imageUrl,
  labelText,
  onClick = () => {},
  draft = false,
  invertIcon = false
}) => {
  return (
    <LabelWrapper key={name} data-qaid="label" onClick={onClick}>
      {draft && (
        <IconWrapper
          color={'macyGrey'}
          inverted={false}
          data-qaid="iconlabel-icon-wrapper"
        >
          <Icon name="loading" size={iconSize} data-qaid="iconlabel-icon" />
        </IconWrapper>
      )}
      {imageUrl && (
        <ImageWrapper data-qaid="iconlabel-image-wrapper">
          <Image
            src={imageUrl}
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
            data-qaid="iconlabel-image"
          />
        </ImageWrapper>
      )}
      {!imageUrl && icon && (
        <IconWrapper
          color={color || 'macyGrey'}
          inverted={invertIcon}
          data-qaid="iconlabel-icon-wrapper"
        >
          <Icon name={icon} size={iconSize} data-qaid="iconlabel-icon" />
        </IconWrapper>
      )}
      {!icon && !imageUrl && !draft && !labelText && (
        <IconWrapper
          color="macyGrey"
          inverted={true}
          data-qaid="iconlabel-icon-wrapper"
        >
          <Icon name={'plus'} size={iconSize} data-qaid="iconlabel-icon" />
        </IconWrapper>
      )}
      <IconLabelText draft={draft} data-qaid="iconlabel-text">
        {labelText && truncateText(labelText, 11)}
      </IconLabelText>
    </LabelWrapper>
  );
};

export default IconLabel;
