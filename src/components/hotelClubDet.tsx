import * as React from 'react';
import {Button, Dialog, AppBar, Toolbar, IconButton, Slide } from '@mui/material'; 

import { TransitionProps } from '@mui/material/transitions';



import NightlifeIcon from '@mui/icons-material/Nightlife';


import HotelClubDetails from './hotelClubDetails';
 

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; 
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
                <NightlifeIcon /> 
                </div>
            
 

              <Button  className="btn showcase" onClick={handleClickOpen}>
                  HOTEL CLUB
              </Button>
            

          </div> 

         

{/*      
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

              <h3>HOTEL CLUB</h3>  
            </IconButton>
          
          </Toolbar>
        </AppBar>  

            <HotelClubDetails />
        
      </Dialog> */}




    </div>
  );
}
