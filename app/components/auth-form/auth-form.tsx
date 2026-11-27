import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function AuthForm() {
  return (
    <Box className="flex flex-col items-center w-105 p-6 border border-gray-400 rounded-2xl shadow-lg  gap-5 *:w-full">
      <Image
        src={'/two-box-logo-color.svg'}
        alt="logo"
        width={64}
        height={64}
        className="w-16 h-16"
      />
      <Typography className="text-primary text-center text-4xl font-bold">
        Two Box
      </Typography>
      <FormControl>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input id="name-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input id="email-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" />
      </FormControl>

      <Button title="Submit" className="text-white bg-primary">
        Submit
      </Button>
    </Box>
  );
}
