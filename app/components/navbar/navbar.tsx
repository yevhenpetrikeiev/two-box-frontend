'use client';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="w-full h-10 bg-primary text-white">
      <AppBar>
        <Toolbar variant="regular">
          <Typography>Two Box</Typography>
          <IconButton
            edge="end"
            sx={{ ml: 'auto' }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu color="white" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List className="md:w-[60vw]">
          <ListItem>Option 1</ListItem>
          <ListItem>Option 2</ListItem>
          <ListItem>Option 3</ListItem>
          <ListItem>Option 4</ListItem>
        </List>
      </Drawer>
    </div>
  );
}
