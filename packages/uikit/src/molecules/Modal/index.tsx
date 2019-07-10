import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from '../../lib/styledComponents';

import { LinkButton as Button } from '../../';

interface ModalWrapperProps {
  children: any;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  opacity: 0.5;
  background-color: #000;
`;

const ModalWrapper = styled.div<ModalWrapperProps>`
  display: inline-table;
  position: fixed;
  padding: 0.5rem;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalContentWrapper = styled.div<ModalWrapperProps>`
  ${({ theme }) => css`
    z-index: 100;
    background: white;
    margin: 1.75rem 1rem;
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100vh;

    ${theme.media.md`
      border-radius: 3px;
      position: relative;
      margin: 1.75rem auto;
      width: 100%;
      left: auto;
      top: auto;
      min-height: 200px;
      height: auto;
    `}
  `}
`;

const ModalCloseHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const ModalContentStage = styled.div<ModalWrapperProps>`
  pointer-events: auto;
  display: flex;
  padding: 0.5rem 1rem;
  min-height: 250px;
`;

interface ModalProps {
  children: any;
  isShowing: boolean;
  hide: () => void;
  'data-qaid'?: string;
}

export const Modal: React.SFC<ModalProps> = ({
  'data-qaid': qaId,
  children,
  isShowing,
  hide
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper>
            <ModalContentWrapper data-qaid={qaId}>
              <ModalCloseHeader>
                <Button onClick={hide}>X</Button>
              </ModalCloseHeader>
              <ModalContentStage>{children}</ModalContentStage>
            </ModalContentWrapper>
          </ModalWrapper>
        </>,
        document.body
      )
    : null;
