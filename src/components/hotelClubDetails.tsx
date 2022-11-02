import * as React from "react"; 

import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";

import {useState} from "react";
 
interface IWidgetProps{
     
}  

const HotelClubDetails: React.FunctionComponent<IWidgetProps> = (props) => { 
      
  let [showSwimmingPool, setshowSwimmingPool] = React.useState(false);  

    return ( 

      <div className="facility_widget-content"> 
        
          <div className="room_services">   

              <h5>HOTEL CLUB</h5>  

                    <div className="widget_wrapper"> 

                          <div className="facility_widget-content">  
                            
                              <em>KEEP UP WITH YOUR FITNESS ROUTINE</em>

                              <p>Stay in sync with your fitness regime even when you are on vacation! Head out to our fully-equipped fitness centre for a wholesome and revitalising workout session.</p>

                              <p>The hotel fitness center comes replete with a host of modern equipment that is both easy to use and user-friendly. There is also a dedicated section for aerobics and to train with free weights at the gymnasium. A professional fitness trainer will be at the centre offering you support during your intensive workout sessions and to provide you with guidance whenever you need it.</p>

                              <div className="facility_pict">
                                  <img src="https://static.iviva.com/images/Udhayimages/Hotel/hotel-club-pict1.jpg" />
                              </div>
                      </div>   

                </div>

          </div>   

    </div>
 
    ); 
}
 
 
export default HotelClubDetails;