import * as React from "react"; 
 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
 

interface IWidgetProps{
     
} 

 

 const BloodmaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {

  
    let [selected, setSelected] = React.useState<string | null>("op-1"); 
    let [inputValue, setInputValue] = React.useState<string | null>("10.00 USD"); 

    const [buttonText, setButtonText] = React.useState("Convert"); 
      

    return (
      <div  className="bloodmary_widget">   
 
            <div className="bloodmary_widget-content">  
                
                    <div className="bloodmary_widget-content-lft"> 
                        <h4>Bloody mary <button className="btn showcase offers" >50% Off</button></h4> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p> 
                    </div>

                    <div className="bloodmary_widget-content-rgt">  
                        <p>HAPPY HOUR <em>5PM-6PM</em></p> 
                        <div className="juice"><img src='https://static.iviva.com/images/Udhayimages/Hotel/juice.png'></img></div> 
                    </div>  
            </div>     

      </div>
    );
 
}
 

export default BloodmaryWidget;