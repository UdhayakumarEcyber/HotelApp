import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
import {useState} from "react";

interface IWidgetProps{
     
}  

  
const HotelServicesWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);
    let [showLinkWidget, setShowLinkWidget] = React.useState(false); 
     


    return ( 
        

      <div className="facility_widget-content">
            <div className="room_services">   
                    <h5>HOTEL SERVICES</h5> 

                    <div className="widget_wrapper page_progress-wrapper">
                        <h2>Page In Progress...</h2>  
                    </div>  

            </div> 

        </div>
    );
   
}
  

export default HotelServicesWidget;