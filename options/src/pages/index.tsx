import React from 'react';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '../app/store';
import Header from '../components/Header';
import Version from '../components/Version';
import { selectApp } from '../features/app';

const Home = () => {
  const settings = useAppSelector(selectApp);
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{ height: '100%' }}
    >
      <Header serverUrl={settings.serverUrl || 'Hello world'} />
      <Version />
    </Stack>
  );
};

export default Home;
