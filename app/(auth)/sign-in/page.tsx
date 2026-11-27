import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '@/app/components/auth-form/auth-form';

export default function SignIn() {
  return (
    <Box className="flex min-h-dvh justify-center items-center overflow-clip p-0">
      <AuthForm />
    </Box>
  );
}
