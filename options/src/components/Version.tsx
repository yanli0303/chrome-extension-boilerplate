import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Version = () => (
  <Tooltip arrow title="__GIT_REVISION__">
    <Typography noWrap>__APP_VERSION__</Typography>
  </Tooltip>
);

export default Version;
