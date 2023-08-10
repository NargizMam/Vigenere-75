import { CssBaseline } from '@mui/material';
import React from 'react';
import Codes from "./features/Codes/Codes";
import AppToolbar from "./components/AppToolBar/AppToolbar";


function App() {
  return (
      <>
          <CssBaseline/>
          <header>
              <AppToolbar/>
          </header>
          <Codes/>
      </>
  );
}

export default App;
