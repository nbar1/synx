import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import Home from '../components/Home';
import { GlobalStyle } from '../styles/global.styles';
import { themeDefault } from '../themes/default';

const Index: NextPage = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Page>
        <Home />
      </Page>
    </ThemeProvider>
  );
};

export default Index;
