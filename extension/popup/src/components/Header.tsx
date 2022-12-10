import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Header = ({ displayName }: { displayName: string }) => (
  <Stack sx={{ padding: 1.5 }}>
    <Typography noWrap variant="h6">
      {displayName}
    </Typography>
  </Stack>
);

export default Header;
