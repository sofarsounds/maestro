import styled from '../../lib/styledComponents';

import { inputBaseStyle, InputProps } from './Base';

export default styled.select<InputProps>`
  ${inputBaseStyle};

  -webkit-appearance: none;
  background-position: calc(100% - 16px) 50%;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"><path d="M4 8L0 4h8z"/></svg>');
`;
