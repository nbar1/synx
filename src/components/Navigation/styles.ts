import styled from 'styled-components';

export const Container = styled.div`
  background: ${(p) => p.theme.navigation.backgroundColor};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: ${(p) => p.theme.navigation.width};
`;

export const Logo = styled.div`
  color: #0059ff;
  font-family: monospace;
  font-size: 24px;
  font-weight: bold;
  line-height: 46px;
  text-align: center;
  width: 100%;
`;
