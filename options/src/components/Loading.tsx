import React from 'react';
import type { CircularProgressProps } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({
  size = '2rem',
  color = 'primary',
  ...props
}: CircularProgressProps) => (
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <CircularProgress size={size} color={color} {...props} />
  </Box>
);
export default Loading;
