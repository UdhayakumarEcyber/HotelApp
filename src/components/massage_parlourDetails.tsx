import * as React from "react"; 

import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";

import {useState} from "react";


 
interface IWidgetProps{
     
}  

const Massage_parlourDetails: React.FunctionComponent<IWidgetProps> = (props) => { 
      
  let [showSwimmingPool, setshowSwimmingPool] = React.useState(false);  

    return ( 

      <div  className="facility_details">    

            <div className="facility_widget-content"> 
                  
                  <em>FOR A REFRESHING DIP ON YOUR VACATION</em> 
                  <p>Take a break from the midday heat by diving into one of our lavish swimming pools – it’s the perfect way to refresh yourself and relax as the tropical sun reaches its zenith. Here at the ABC Beach Resort and Spa, guests have unlimited access to two spectacular swimming pools.</p>

                  <p>Take a break from the midday heat by diving into one of our lavish swimming pools – it’s the perfect way to refresh yourself and relax as the tropical sun reaches its zenith. Here at the ABC Beach Resort and Spa, guests have unlimited access to two spectacular swimming pools.</p>

                  <div className="facility_pict">
                      <img src="https://static.iviva.com/images/Udhayimages/Hotel/massage-parlour.jpg" />
                  </div>
            </div>   

      </div>
 
    ); 
}
 
 
export default Massage_parlourDetails;