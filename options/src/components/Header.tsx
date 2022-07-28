import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Header = ({ serverUrl }: { serverUrl: string }) => (
  <Tooltip title={serverUrl} arrow>
    <Typography noWrap>{serverUrl}</Typography>
  </Tooltip>
);

export default Header;
