import { Badge } from '@supabase/ui';
import { styled } from 'styles/stitches';

const HeaderWrapper = styled('header', {
  display: 'flex',
  alignItems: 'center',
  padding: '16px 0',
});

const HeaderInner = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 32px',
  margin: '0 auto',

  '@media (max-width: 520px)': {
    padding: '0 16px',
  },
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const HeaderImage = styled('img', {
  height: 24,

  '@media (max-width: 520px)': {
    height: 16,
  },
});

interface Props {
  rightNode: React.ReactNode;
}

export const Header = ({ rightNode }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer>
          <HeaderImage
            src="/images/nullk-survey-logo.svg"
            alt="Nullk Survey Logo"
          />
          <Badge color="green">Beta</Badge>
        </LogoContainer>
        {rightNode}
      </HeaderInner>
    </HeaderWrapper>
  );
};
