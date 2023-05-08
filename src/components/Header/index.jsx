import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

import { drawerWidth } from '../../constants'

export default function Header() {
  return (
    <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
        <Toolbar>
        <Typography variant="h6" noWrap component="div">
            Permanent drawer
        </Typography>
        </Toolbar>
    </AppBar>
  );
}
