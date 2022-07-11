import React from '../../meta/pkg/react.js';
import Typography from '../../meta/pkg/@mui/material/Typography.js';
import Tooltip from '../../meta/pkg/@mui/material/Tooltip.js';
const Header = ({ serverUrl }) =>
  /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      title: serverUrl,
      arrow: true,
    },
    /* @__PURE__ */ React.createElement(
      Typography,
      {
        noWrap: true,
      },
      serverUrl
    )
  );
export default Header;
