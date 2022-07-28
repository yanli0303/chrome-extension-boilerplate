import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '../app/store';
import Header from '../components/Header';
import Version from '../components/Version';
import { selectApp } from '../features/app';

const Home = () => {
  const settings = useAppSelector(selectApp);
  const handleClick = () => {
    chrome.runtime.sendMessage({
      from: 'popup',
      to: 'background',
      type: 'login',
      body: 'React',
    });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{ height: '100%' }}
    >
      <Header serverUrl={settings.serverUrl || 'Hello world'} />
      <Version />
      <Button type="button" variant="contained" onClick={handleClick}>
        Click Me!
      </Button>
    </Stack>
  );
};

export default Home;
