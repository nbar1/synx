import { FC } from 'react';
import Link from 'next/link';
import { Container, Icon } from './NavLink.styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavLinkProps {
  label: string;
  icon: IconProp;
  url: string;
}

const NavLink: FC<NavLinkProps> = ({ label, icon, url }) => {
  return (
    <Container>
      <Link href={url}>
        <a>
          {label}
          <Icon icon={icon} />
        </a>
      </Link>
    </Container>
  );
};

export default NavLink;
