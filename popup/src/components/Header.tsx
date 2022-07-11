import React from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const Header = ({ serverUrl }: { serverUrl: string }) => (
  <Tooltip title={serverUrl} arrow>
    <Typography noWrap>{serverUrl}</Typography>
  </Tooltip>
);

export default Header;
