import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const Header = () => (
  <Paper sx={{ borderRadius: 0, width: '100%', padding: '1rem' }}>
    <Typography noWrap variant="h5">
      Browser Extension Options
    </Typography>
  </Paper>
);
