import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import Home from '../components/Home';
import { GlobalStyle } from '../styles/global.styles';
import { themeDefault } from '../themes/default';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

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
