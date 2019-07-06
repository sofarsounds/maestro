import styled, { css } from '../../lib/styledComponents';

interface ImageProps {
  url: string;
}

export default styled.div<ImageProps>`
  ${({ url, theme }) => css`
    width: 100%
    padding-top: 65%;
    position: relative;
    border-radius: ${theme.borderRadius.default};
    background-image: url(${url});
    background-size: cover;
    background-position: center;


    ${theme.media.md`
      width: 45%;
      padding-top: 25%;
    `}
  `}
`;
