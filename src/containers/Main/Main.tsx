import { IconCompass, IconMenu, IconTool } from '@supabase/ui';
import { GNBLayout } from 'components/Layouts';
import { ResearchMenu } from 'components/ResearchMenu';
import { SideMenu } from 'components/SideMenu/SideMenu';

import { styled } from 'styles/stitches';

const MainWrapper = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '16px 32px',
  boxSizing: 'border-box',
  gap: '32px',

  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    padding: '16px 16px 32px 16px',
  },
});

const ResearchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  height: '100%',
  overflow: 'auto',
});

const ItemTitle = styled('h2', {
  fontSize: '16px',
  fontWeight: 700,
  color: '$grey800',
});

export const Main = () => {
  return (
    <GNBLayout>
      <MainWrapper>
        <SideMenu>
          <SideMenu.Group
            icon={<IconMenu strokeWidth={3} size={12} stroke="#212121" />}
            title="진행 중인 카테고리"
            active
            open
          >
            <SideMenu.Item
              icon={<IconTool strokeWidth={2} size={12} stroke="#212121" />}
              active
            >
              생산성
            </SideMenu.Item>
          </SideMenu.Group>
          <SideMenu.Group
            icon={<IconMenu strokeWidth={3} size={12} stroke="#212121" />}
            title="종료된 카테고리"
            active={false}
          >
            <SideMenu.Item
              icon={<IconCompass strokeWidth={2} size={14} stroke="#212121" />}
            >
              업무 스타일
            </SideMenu.Item>
          </SideMenu.Group>
        </SideMenu>
        <ResearchContainer>
          <ItemTitle>📦 진행 중인 리서치</ItemTitle>
          <ResearchMenu>
            <ResearchMenu.Item
              title="리액트가 좋은지, 스벨트가 좋은지 판단 필요"
              active
            />
            <ResearchMenu.Item title="프로젝트 관리 툴" active={false} />
            <ResearchMenu.Item title="테스트" active={false} />
          </ResearchMenu>
        </ResearchContainer>
      </MainWrapper>
    </GNBLayout>
  );
};
