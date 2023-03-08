import { IconChevronDown, IconChevronRight } from '@supabase/ui';
import { useCallback, HTMLAttributes, useState } from 'react';
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
  open?: boolean;
  onClick?: () => void;
}

const Group = ({ title, icon, children, active, open }: GroupProps) => {
  const GroupContainer = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
  });

  const GroupInner = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 144,
    borderRadius: '$4',
    padding: '$4 $4',
    gap: '$2',
    userSelect: 'none',
    cursor: 'pointer',
    marginBottom: '$2',

    variants: {
      active: {
        true: {
          backgroundColor: '#F3F4F6',
          '& > h3': {
            color: '$grey700',
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
          '& > svg': {
            stroke: '$grey400',
          },
          transition: 'background-color 0.2s ease-in-out',
          '&:hover': {
            transition: 'background-color 0.2s ease-in-out',
            backgroundColor: '#F5F6F8',
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
    flex: '1 0 auto',
  });

  const [isOpen, setIsOpen] = useState(open);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <GroupContainer>
      <GroupInner onClick={handleClick} active={active}>
        {icon && <span>{icon}</span>}
        <GroupTitle>{title}</GroupTitle>
        {isOpen ? (
          <IconChevronDown strokeWidth={2} size={14} stroke="#212121" />
        ) : (
          <IconChevronRight strokeWidth={2} size={14} stroke="#212121" />
        )}
      </GroupInner>
      {isOpen && children}
    </GroupContainer>
  );
};

const Item = ({ icon, children, active, onClick }: GroupProps) => {
  const ItemContainer = styled('li', {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$4',
    padding: '$4 $6',
    gap: '$2',
    userSelect: 'none',
    cursor: 'pointer',

    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      transition: 'background-color 0.2s ease-in-out',
      backgroundColor: '#F5F6F8',
    },
    variants: {
      active: {
        true: {
          '& > h3': {
            color: '$grey700',
          },
          '& > span > svg': {
            stroke: '#grey700',
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
