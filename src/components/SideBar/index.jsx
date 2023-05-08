import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

import { mainMenuData, otherMenuData } from './SideBarData'
import { drawerWidth } from '../../constants'

export default function SideBar() {
   const theme = useTheme();
   const [selectedPath, setselectedPath] = React.useState('/');

   const handleListItemClick = (event, index) => {
      setselectedPath(index);
   };

   return (
   <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant='h4' 
         sx={{
            fontWeight: 'bolder', 
            padding: '1.5rem 16px', 
            color: theme.palette.primary.main,
            fontSize: '32px',
            }}>GAT</Typography>
        <Typography variant='p' sx={{fontWeight: 'bolder', padding: '0px 16px', color: theme.palette.text.primary}}>Menu</Typography>
        <List>
          {mainMenuData.map((val, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton selected={selectedPath === val.path}
                  onClick={(event) => handleListItemClick(event, val.path)}>
                <ListItemIcon sx={{color: selectedPath === val.path ? theme.palette.primary.main : ''}}>
                  {val.icon}
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography variant='p' sx={{fontWeight: 'bolder', padding: '16px 16px 0px 16px', color: theme.palette.text.primary}}>Other</Typography>
        <List>
          {otherMenuData.map((val, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton selected={selectedPath === val.path}
                  onClick={(event) => handleListItemClick(event, val.path)}>
                <ListItemIcon sx={{color: selectedPath === val.path ? theme.palette.primary.main : ''}}>
                  {val.icon}
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}