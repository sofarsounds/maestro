import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  dom: Element;
}

export default (props: PortalProps) => createPortal(props.children, props.dom);
