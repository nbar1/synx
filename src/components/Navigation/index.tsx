import { FC } from 'react';
import NavLink from './NavLink';
import { Container, Logo } from './styles';

const Navigation: FC = () => {
  return (
    <Container>
      <Logo>synx</Logo>
      <ul>
        <NavLink label="Dashboard" icon="chart-pie" url="/" />
        <NavLink label="Next Page" icon="arrow-right" url="/" />
        <NavLink label="Settings" icon="cog" url="/" />
      </ul>
    </Container>
  );
};

export default Navigation;
