import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h3>Wyszukiwarka Kulinarnych Rewolucji</h3>
            Poszukaj swojej Rewolucji
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
