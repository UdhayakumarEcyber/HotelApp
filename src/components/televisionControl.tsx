import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
interface IWidgetProps{
     
}  
 
 

  const TelevisionControlWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    
let [defCheckStateMain, setdefCheckStateMain] = React.useState<boolean>(false); 
const onChangeCheckboxDefMain = (checked: boolean) => {
    setdefCheckStateMain(checked);
} 
  
let [inputValue, setInputValue] = React.useState<string | null>("Search");


    
var channelList = [ 
    {
     "id": "1",
      "label": "CNN TV", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/cnn.jpg" 
    },
    {
        "id": "2",
        "label": "CNN TV", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cnn.jpg"
    },
    {
        "id": "3",
        "label": "CNN TV", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cnn.jpg"
    },
    {
        "id": "4",
        "label": "CNN TV", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cnn.jpg"
    },
    {
        "id": "5",
        "label": "CNN TV", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cnn.jpg"
    } 
] 
    
    const NewsChannel = () => (
        <ul className="chennel_list">
          {channelList.map(item => (
            <li key={item.id}>   
              <div className="status"><img src={item.img}></img></div>
              <div className="label">{item.label}</div> 
            </li>
          ))}
        </ul>
      );
     
      

    return ( 
        

      <div className="facility_widget-content">
            <div className="control_tv"> 

            <h5>CONTROL TELEVISION</h5>  

            <div className="widget_wrapper channel_wrapper">

                <div className="widget_wrapper-top">
                    <SearchBox value={inputValue} onChange={(newValue) => { setInputValue(newValue) }} /> 

                    <div className="control_light-content">   
                      <Checkbox onChange={onChangeCheckboxDefMain} checked={defCheckStateMain} type="switch-box"/>  
                    </div> 
                </div> 
          
                <div className="chennels">
                    <h6>News Tv Channels</h6> 
                    <NewsChannel /> 
                </div> 

                <div className="chennels">
                    <h6>Movies Tv Channels</h6> 
                    <NewsChannel /> 
                </div>

                <div className="chennels">
                    <h6>Entertainment Tv Channels</h6> 
                    <NewsChannel /> 
                </div>

                <div className="chennels">
                    <h6>Sports Tv Channels</h6> 
                    <NewsChannel /> 
                </div> 
            </div> 
        </div> 

        </div>
    );
   
}
  

export default TelevisionControlWidget;