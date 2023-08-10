import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
  textDecoration: 'none',
  '&:hover': {
    color: '#4B0082'
  },
});
const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2, background: '#E6E6FA'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link to="/">Vijenere coding</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppToolbar;
