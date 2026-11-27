import { Meta, StoryObj } from '@storybook/react';
import AuthForm from './auth-form';

const meta: Meta<typeof AuthForm> = {
  title: 'Components/AuthForm',
  component: AuthForm,
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Default: Story = {};
