import React from '../../meta/pkg/react.js';
import Box from '../../meta/pkg/@mui/material/Box.js';
import CircularProgress from '../../meta/pkg/@mui/material/CircularProgress.js';
const Loading = () =>
  /* @__PURE__ */ React.createElement(
    Box,
    {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    /* @__PURE__ */ React.createElement(CircularProgress, {
      size: 36,
      color: 'primary',
    })
  );
export default Loading;
