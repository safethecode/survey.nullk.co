import { Fragment, HTMLAttributes } from 'react';
import { Badge, IconDatabase, IconTool } from '@supabase/ui';
import { styled } from 'styles/stitches';

interface ResearchMenuProps {
  children: React.ReactNode;
}

type Props = ResearchMenuProps & HTMLAttributes<HTMLUListElement>;

export const ResearchMenu = ({ children, ...rest }: Props) => {
  const ResearchMenuWrapper = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  });
  return (
    <ResearchMenuWrapper {...rest}>
      {children ? children : <NoneResearchItem />}
    </ResearchMenuWrapper>
  );
};

interface ItemProps {
  id: string;
  title: string;
  active: boolean;
  descriptions: Array<{
    endDate?: Date;
    category?: {
      categoryTitle: string;
      icon: React.ReactNode;
    };
  }>;
  onClick?: () => void;
}

const Item = ({ id, title, active, descriptions }: ItemProps) => {
  const ItemContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '$6 $6',
    gap: '$4',
    userSelect: 'none',
    cursor: 'pointer',
    borderRadius: '16px',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '#F3F4F6',
      transition: 'all 0.2s ease-in-out',
    },

    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '$3 $3',
      gap: '$3',
    },
  });

  const TitleInner = styled('div', {
    display: 'flex',
    flex: '1 0 auto',
    minWidth: 450,
    gap: '$4',

    '@media (max-width: 1024px)': {
      width: '100%',
      minWidth: 'unset',
      flexDirection: 'column',
      gap: '$3',

      '& > span': {
        width: 'max-content',
      },
    },
  });

  const ItemTitle = styled('h2', {
    fontSize: '18px',
    fontWeight: 700,
    color: '$grey800',

    '@media (max-width: 1024px)': {
      fontSize: '16px',
    },
  });

  const DescriptionItem = styled('h3', {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 400,
    color: '$grey600',
    gap: '$2',

    '@media (max-width: 1024px)': {
      fontSize: '12px',
      gap: '$1',
    },
  });

  const DescriptionList = styled('div', {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    gap: '$2',
  });

  const BadgeContainer = styled('div', {
    display: 'flex',
    minWidth: 56,
  });

  return (
    <ItemContainer>
      <TitleInner>
        <BadgeContainer>
          {active ? (
            <Badge color="green">진행 중</Badge>
          ) : (
            <Badge color="red">종료</Badge>
          )}
        </BadgeContainer>
        <ItemTitle>{title}</ItemTitle>
      </TitleInner>
      <DescriptionList>
        {descriptions.map((description) => (
          <DescriptionItem key={id}>
            {description.endDate ? (
              <Fragment>
                {description.endDate.toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Fragment>
            ) : description.category ? (
              <Fragment>
                {description.category.icon}
                {description.category.categoryTitle}
              </Fragment>
            ) : null}
          </DescriptionItem>
        ))}
      </DescriptionList>
    </ItemContainer>
  );
};

Item.defaultProps = {
  id: '123-456',
  active: true,
  title: '테스트 제목입니다.',
  descriptions: [
    {
      endDate: new Date(),
    },
    {
      category: {
        categoryTitle: '생산성',
        icon: <IconTool strokeWidth={2} size={12} stroke="#212121" />,
      },
    },
  ],
};

const NoneResearchItem = () => {
  const NoneResearchItemContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    padding: '$6 $6',
    borderRadius: '16px',
    backgroundColor: '#F3F4F6',
  });

  const Description = styled('h3', {
    fontSize: '14px',
    fontWeight: 700,
    color: '$grey800',
  });

  return (
    <NoneResearchItemContainer>
      <IconDatabase strokeWidth={2} size={16} stroke="#212121" />
      <Description>진행 중인 리서치가 없습니다.</Description>
    </NoneResearchItemContainer>
  );
};

ResearchMenu.Item = Item;
