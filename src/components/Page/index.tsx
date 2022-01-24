import { FC } from 'react';
import Navigation from '../Navigation';
import { Container } from './styles';

interface PageProps {
  children: React.ReactNode;
}

const Home: FC<PageProps> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Home;
