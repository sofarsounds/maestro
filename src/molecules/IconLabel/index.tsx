import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import { Colors } from '../../typings/theme';

const LabelWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.whiteDenim};
    padding: ${theme.ruler[1]}px ${theme.ruler[2]}px;
    height: ${theme.ruler[12]}px;
    border-radius: ${theme.ruler[6]}px;
    font-size: 12px;
    display: flex;
    align-items: center;
    width: 160px;
  `}
`;

const IconLabelText = styled.div<IconLabelTextProps>`
  ${({ theme, draft }) => css`
    padding: 0px ${theme.ruler[2]}px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${draft &&
      css`
        color: ${theme.colors.macyGrey};
      `}
  `}
`;

const UpperText = styled(IconLabelText)`
  font-size: 10px;
  letter-spacing: 1.5px;
`;

const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  justify-content: center;
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
    min-width: ${theme.ruler[8]}px;
    min-height: ${theme.ruler[8]}px;
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
  upperLabelText?: string;
  onClick?: any;
  draft?: boolean;
  color?: Colors;
  invertIcon?: boolean;
  className?: string;
  emptyIcon?: boolean;
}

interface IconWrapperProps {
  color: Colors;
  inverted: boolean;
}

interface IconLabelTextProps {
  draft: boolean;
}

const IconLabel: React.SFC<Props> = ({
  icon,
  iconSize = '14px',
  color,
  imageUrl,
  labelText,
  upperLabelText,
  onClick = () => {},
  draft = false,
  invertIcon = false,
  className = '',
  emptyIcon = false
}) => {
  return (
    <LabelWrapper
      key={name}
      data-qaid="label"
      onClick={onClick}
      className={className}
    >
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
      {emptyIcon && (
        <IconWrapper
          color={color || 'macyGrey'}
          inverted={invertIcon}
          data-qaid="iconlabel-icon-wrapper"
        />
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
      <LabelsWrapper>
        {upperLabelText && (
          <UpperText draft={draft} data-qaid="iconlabel-upper-label-text">
            {upperLabelText}
          </UpperText>
        )}
        <IconLabelText draft={draft} data-qaid="iconlabel-text">
          {labelText}
        </IconLabelText>
      </LabelsWrapper>
    </LabelWrapper>
  );
};

export default IconLabel;
