import { List, ListItem } from '@mui/material';
import { ChevronLeft } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

type NavbarListType = {
  className?: string;
  open?: Dispatch<SetStateAction<boolean>>;
  screen?: boolean;
};
export default function NavbarList({
  className,
  open,
  screen = false,
}: NavbarListType) {
  return (
    <List
      className={cn(
        'w-full text-2xl text-center lg:flex lg:text-sm lg:justify-center lg:*:flex lg:*:justify-center lg:*:items-center',
        className,
        { 'w-screen md:w-[60vw]': screen },
      )}
    >
      {open && (
        <ListItem className="">
          <ChevronLeft
            className="md:hidden"
            onClick={() => {
              open(false);
            }}
          />
        </ListItem>
      )}
      <ListItem>Store</ListItem>
      <ListItem>Profile</ListItem>
      <ListItem>Home</ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>Log Out</ListItem>
    </List>
  );
}
