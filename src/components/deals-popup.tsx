import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
import {useState} from "react";

interface IWidgetProps{
     
}  

 
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'; 
import PoolIcon from '@mui/icons-material/Pool'; 
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; 
import SpaIcon from '@mui/icons-material/Spa'; 
import NightlifeIcon from '@mui/icons-material/Nightlife';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import OpacityIcon from '@mui/icons-material/Opacity';
import WcIcon from '@mui/icons-material/Wc';
import DryCleaningIcon from '@mui/icons-material/DryCleaning'; 
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SoapIcon from '@mui/icons-material/Soap';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ShowerIcon from '@mui/icons-material/Shower';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';

const DealsPopup: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);
    let [showLinkWidget, setShowLinkWidget] = React.useState(false); 
     


let [num, setNum]= useState(0);
let incNum =()=>{
  if(num<10)
  {
  setNum(Number(num)+1);
  }
};
let decNum = () => {
   if(num>0)
   {
    setNum(num - 1);
   }
}
let handleChange = (e:any)=>{
 setNum(e.target.value);
}



    return ( 
        

      <div className="facility_widget-content">
            <div className="room_services">   

            <button className="btn showcase" type="submit" onClick={() => setshowRoomserviceModal(true)}> Udhaya </button> 
 

                                <Modal title ={'Deals Popup'} show={showRoomserviceModal} onOpen={() => { }} onClose={() => setshowRoomserviceModal(false)} >
                       
                                    <WidgetWrapper className="roomservices_popup">   

                                        <div className="roomservices_popup-content">    
                                            
                                            <div className="roomservices-box">

                                                 <LocalMallIcon />  
                                                     
                                            </div>

                                            <div className="inc-dec-btn"> 
                                                <div className="inc-dec-btn-cont"> 
                                                 
                                                    <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                                
                                                    <input type="text" className="form-control" value={num} onChange={handleChange}/>
                                                
                                                    <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                                
                                                </div>
                                            </div>

                                            <button className="btn showcase" type="submit" onClick={() => setShowLinkWidget(true)}>
                                                    Add 1 to Basket  <span>LKR 500.00</span>
                                            </button>
                                                
                                        </div>  

                                    </WidgetWrapper>

                                </Modal> 

                            </div> 

        </div>
    );
   
}
  

export default DealsPopup;