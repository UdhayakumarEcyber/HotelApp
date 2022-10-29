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

const RoomServicesWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);
    let [showLinkWidget, setShowLinkWidget] = React.useState(false); 
   
var roomServicesList = [ 
    {
    "id": "1",
    "label": "Laundry Bag", 
     'img' :  <LocalMallIcon />  
    },
    {
    "id": "2",
    "label": "Laundary", 
    "img": <PoolIcon />   
    },
    {
    "id": "3",
    "label": "Water", 
    "img": <OpacityIcon />  
    },
    {
    "id": "4",
    "label": "Slippers", 
    "img": <PoolIcon />  
    },
    {
    "id": "5",
    "label": "Toilet Roll", 
    "img": <WcIcon />  
    },
    {
    "id": "6",
    "label": "Hand Towel", 
    "img": <DryCleaningIcon />  
    },
    {
    "id": "7",
    "label": "Bath Towel", 
    "img": <DryCleaningIcon />  
    },
    {
    "id": "8",
    "label": "Swimming Pool", 
    "img": <PoolIcon />   
    },
    {
    "id": "9",
    "label": "Laundry Bag", 
    "img": <LocalMallIcon />  
    },
    {
    "id": "10",
    "label": "Laundary", 
    "img": <LocalLaundryServiceIcon />  
    },
    {
    "id": "11",
    "label": "Water", 
    "img": <OpacityIcon />  
    },
    {
    "id": "12",
    "label": "Slippers", 
    "img": <PoolIcon />  
    } 
];


const RoomServices = () => (
<ul className="room_services_list">
  {roomServicesList.map(item => (
    <li key={item.id}>   
       {/* <div className="pict"><img src={item.img} /></div>   */}
       <div className="icon">{item.img}</div>  
      {/* <div className="icon"><PoolIcon /></div>  */}
      <button className="btn showcase" type="submit" onClick={() => setshowRoomserviceModal(true)}> {item.label}</button> 

    </li>
  ))}
</ul>
); 


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
                                 <h5>ROOM SERVICES</h5>  

                                <RoomServices />  

                                <Modal title ={'Laundry Bag'} show={showRoomserviceModal} onOpen={() => { }} onClose={() => setshowRoomserviceModal(false)} >
                       
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
  

export default RoomServicesWidget;