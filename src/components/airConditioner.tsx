import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
interface IWidgetProps{
     
}  
 
 import App from './ac_control';

 const AirConditionerWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    
let [defCheckStateMain, setdefCheckStateMain] = React.useState<boolean>(false); 
const onChangeCheckboxDefMain = (checked: boolean) => {
    setdefCheckStateMain(checked);
} 
  
let [inputValue, setInputValue] = React.useState<string | null>("Search");


       

    return ( 
        

      <div className="facility_widget-content">

            <div className="air_conditioner"> 

                <h5>CONTROL A/C</h5> 
                <div className="widget_wrapper ac_wrapper">
                <h6>Air Conditioner</h6> 
                    <div className="widget_wrapper-top">
                        
                        <div className="control_light-content">   
                            <Checkbox onChange={onChangeCheckboxDefMain} checked={defCheckStateMain} type="switch-box"/>  
                        </div> 
                    </div>  
                    <App/>   
                </div>  

                </div>

        </div>
    );
   
}
  

export default AirConditionerWidget;