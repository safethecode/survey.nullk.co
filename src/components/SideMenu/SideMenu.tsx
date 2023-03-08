import { useCallback, HTMLAttributes } from 'react';
import { styled } from 'styles/stitches';

interface SideMenuProps {
  children: React.ReactNode;
}

type Props = SideMenuProps & HTMLAttributes<HTMLDivElement>;

export const SideMenu = ({ children, ...rest }: Props) => {
  const SideMenuWrapper = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  });
  return <SideMenuWrapper {...rest}>{children}</SideMenuWrapper>;
};

interface GroupProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Group = ({ title, icon, children, active }: GroupProps) => {
  const GroupContainer = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
  });

  const GroupInner = styled('div', {
    display: 'flex',
    alignItems: 'center',
    minWidth: 144,
    borderRadius: '$4',
    backgroundColor: '#0596691A',
    padding: '$4 $4',
    gap: '$2',
    userSelect: 'none',
    cursor: 'pointer',

    variants: {
      active: {
        true: {
          backgroundColor: '#0596691A',
          '& > h3': {
            color: '#10B981',
          },
        },
        false: {
          backgroundColor: '#F3F4F6',
          '& > h3': {
            fontWeight: 500,
            color: '$grey400',
          },
          '& > span > svg': {
            stroke: '$grey400',
          },
        },
      },
    },
    defaultVariants: {
      active: false,
    },
  });

  const GroupTitle = styled('h3', {
    fontSize: 14,
    fontWeight: 'bold',
  });

  return (
    <GroupContainer>
      <GroupInner active={active}>
        {icon && <span>{icon}</span>}
        <GroupTitle>{title}</GroupTitle>
      </GroupInner>
      {children}
    </GroupContainer>
  );
};

const Item = ({ icon, children, active, onClick }: GroupProps) => {
  const ItemContainer = styled('li', {
    display: 'flex',
    alignItems: 'center',
    padding: '$4 $6',
    gap: '$2',
    userSelect: 'none',
    cursor: 'pointer',

    variants: {
      active: {
        true: {
          '& > h3': {
            color: '#212121',
          },
          '& > span > svg': {
            stroke: '#212121',
          },
        },
        false: {
          '& > h3': {
            fontWeight: 500,
            color: '$grey400',
          },
          '& > span > svg': {
            stroke: '$grey400',
          },
        },
      },
    },
    defaultVariants: {
      active: false,
    },
  });

  const ItemTitle = styled('h3', {
    fontSize: 14,
    fontWeight: 'bold',
  });

  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <ItemContainer onClick={handleClick} active={active}>
      {icon && <span>{icon}</span>}
      <ItemTitle>{children}</ItemTitle>
    </ItemContainer>
  );
};

SideMenu.Group = Group;
SideMenu.Item = Item;
