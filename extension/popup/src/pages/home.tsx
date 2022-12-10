import React from 'react';
import { MessageAddress } from '@localhost/chrome';
import Stack from '@mui/material/Stack';
import { useAppSelector } from '../app/store';
import Header from '../components/Header';
import { selectUsername } from '../features/app';

export const HomePage = () => {
  chrome.runtime
    .sendMessage({
      from: MessageAddress.Popup,
      to: MessageAddress.Background,
      type: 'hello',
    })
    .catch((error) => log.error('send hello error', error));

  const username = useAppSelector(selectUsername);
  return (
    <Stack flexGrow={1}>
      <Header displayName={username} />
    </Stack>
  );
};
