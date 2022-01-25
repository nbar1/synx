import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.li`
  color: ${({ theme }) => theme.navigation.textColor};
  margin: 0;
  padding: 0;
  width: 100%;

  a {
    display: block;
    line-height: 48px;
    padding: 0 15px;
    position: relative;
    width: 100%;

    &:hover {
      background: ${({ theme }) => theme.page.backgroundColor};
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  position: absolute;
  right: 15px;
  top: calc(50% - 10px);
`;
