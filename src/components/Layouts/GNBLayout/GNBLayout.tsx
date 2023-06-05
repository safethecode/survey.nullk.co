import { ReactNode } from 'react';

import { Header, Footer } from 'components/Layouts';
import { Button } from '@supabase/ui';

import { FOOTER_CONTENT } from 'constants/components-contents';

import { styled } from 'styles/stitches';

interface GNBLayoutProps {
  children: ReactNode;
}

const GNB = styled('main', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  margin: '0 auto',
});

export const GNBLayout = ({ children }: GNBLayoutProps) => {
  return (
    <GNB>
      <Header rightNode={<Button type="primary">관리자 로그인</Button>} />
      {children}
      <Footer footerItems={FOOTER_CONTENT} />
    </GNB>
  );
};
