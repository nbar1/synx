import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(p) => p.theme.page.backgroundColor};
  margin-left: ${(p) => p.theme.navigation.width};
  width: calc(100vw - 250px);
`;
