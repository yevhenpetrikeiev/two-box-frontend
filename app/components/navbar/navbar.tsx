'use client';
import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import NavbarList from './navbar-list';
import Image from 'next/image';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="w-full h-10 bg-primary text-white">
      <AppBar>
        <Toolbar variant="regular" className="w-screen flex items-center">
          <Image
            src={'/two-box-logo.svg'}
            alt="two-box-logo"
            width={24}
            height={24}
          />
          <IconButton
            aria-label="Menu button"
            className="ml-auto lg:hidden"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu color="white" />
          </IconButton>
          <NavbarList className="hidden w-fit" />
        </Toolbar>
      </AppBar>
      <Drawer
        className="lg:hidden"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <NavbarList screen open={setIsDrawerOpen} />
      </Drawer>
    </div>
  );
}
