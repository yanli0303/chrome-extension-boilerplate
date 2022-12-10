import React from 'react';
import { MessageAddress } from '@localhost/chrome';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { log } from '../app/log';
import { Header } from '../components/Header';

export const Home = () => {
  chrome.runtime
    .sendMessage({
      from: MessageAddress.Options,
      to: MessageAddress.Background,
      type: 'hello',
    })
    .catch((error) => log.error('send hello error', error));

  return (
    <Stack alignItems="center" justifyContent="center">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs />
        <Grid item xs={10}>
          <Paper sx={{ margin: '2rem auto', padding: '2rem' }}>
            Hello World!
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    </Stack>
  );
};
