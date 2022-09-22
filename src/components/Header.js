import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor:'#124D6A'}}>
        <Toolbar>
          <Link to="/" style={{textDecoration: 'none'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' , color: 'white'} }}
            >
              Venus
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/about" style={{textDecoration: 'none'}}>
              <Button sx={{ color: '#fff' }}>
                About
              </Button>
            </Link>
            <Link to="/baitap" style={{textDecoration: 'none'}}>
              <Button sx={{ color: '#fff' }}>
                Project
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
