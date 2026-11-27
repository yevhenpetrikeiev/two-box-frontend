import type { Meta, StoryObj } from '@storybook/react';
import SignIn from './page';
import { Layout } from 'lucide-react';

const meta = {
  title: 'Pages/Sign-in',
  component: SignIn,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
