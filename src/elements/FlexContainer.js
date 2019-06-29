import styled from 'styled-components';
import { above } from '../utilities';

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Half = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  ${above.md`
    width: 50%;
  `}
`;
