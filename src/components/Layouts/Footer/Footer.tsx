import { styled } from 'styles/stitches';

const FooterWrapper = styled('footer', {
  display: 'flex',
  backgroundColor: '$grey50',
});

const FooterInner = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '64px 32px',
  margin: '0 auto',

  '@media (max-width: 520px)': {
    flexDirection: 'column',
    gap: 32,
  },
});

const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: 16,

  '@media (max-width: 520px)': {
    alignItems: 'flex-start',
  },
});

const MenuContainer = styled('div', {
  display: 'flex',
  gap: 32,

  '@media (max-width: 520px)': {
    flexDirection: 'column',
  },
});

const FooterMenu = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const FooterMenuItem = styled('li', {
  fontSize: 14,
  fontWeight: 500,
  color: '$grey400',
});

const H3 = styled('h3', {
  fontSize: 16,
  fontWeight: 700,
  color: '$grey600',
});

const Anchor = styled('a', {
  textDecoration: 'none',
  color: 'currentColor',
});

const HeaderImage = styled('img', {
  height: 24,
});

interface Props {
  footerItems: Array<{
    menuTitle: string;
    items: Array<{
      title: string;
      href: string;
    }>;
  }>;
}

export const Footer = ({ footerItems }: Props) => {
  return (
    <FooterWrapper>
      <FooterInner>
        <LogoContainer>
          <HeaderImage
            src="/images/nullk-survey-logo.svg"
            alt="Nullk Survey Logo"
          />
        </LogoContainer>
        <MenuContainer>
          {footerItems?.map((menu, menuKey) => (
            <FooterMenu key={menuKey}>
              <H3>{menu.menuTitle}</H3>
              {menu.items.map((item, itemKey) => (
                <FooterMenuItem key={itemKey}>
                  <Anchor href={item.href}>{item.title}</Anchor>
                </FooterMenuItem>
              ))}
            </FooterMenu>
          ))}
        </MenuContainer>
      </FooterInner>
    </FooterWrapper>
  );
};
