import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog'; 
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton'; 
// import Slide from '@mui/material/Slide';


import {Button, Dialog, AppBar, Toolbar, IconButton, Slide } from '@mui/material'; 

import { TransitionProps } from '@mui/material/transitions';


import SwimmingPoolDetails from './swimmingPoolDetails';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import PoolIcon from '@mui/icons-material/Pool'; 
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function SwimmingPoolWidget() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    

      <div className="hotel_facility_widget widget">    

            <div className="hotel_facility_widget_content">

                <div className="icon"> 
                    <PoolIcon />  
                </div>
            
 

              <Button  className="btn showcase" onClick={handleClickOpen}>
                 Swimming Pool
              </Button>
            

          </div> 

         

     
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <KeyboardBackspaceIcon />

              <h3>SWIMMING POOL</h3>
            </IconButton>
          
          </Toolbar>
        </AppBar>  

<SwimmingPoolDetails />
        
      </Dialog>
    </div>
  );
}
