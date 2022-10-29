import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
interface IWidgetProps{
     
}  
 
 

  const MusicControllWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    
let [defCheckStateMain, setdefCheckStateMain] = React.useState<boolean>(false); 
const onChangeCheckboxDefMain = (checked: boolean) => {
    setdefCheckStateMain(checked);
} 
  
let [inputValue, setInputValue] = React.useState<string | null>("Search");


      
var musicList = [ 
    {
     "id": "1",
      "label": "Divide", 
      "description": "Ed Sheeran", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music.jpg" 
    },
    {
        "id": "2",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music.jpg"
    },
    {
        "id": "3",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music.jpg"
    },
    {
        "id": "4",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music.jpg"
    },
    {
        "id": "5",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music.jpg"
    } 
] 


var musicArtist = [ 
    {
     "id": "1",
      "label": "Charlie Puth",   
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/rapper1.jpg" 
    },
    {
        "id": "2",
        "label": "Charlie Puth",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/rapper1.jpg"
    },
    {
        "id": "3",
        "label": "Charlie Puth",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/rapper1.jpg"
    },
    {
        "id": "4",
        "label": "Charlie Puth",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/rapper1.jpg"
    },
    {
        "id": "5",
        "label": "Charlie Puth",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/rapper1.jpg"
    } 
] 
    
const PopularArtist = () => (
    <ul className="chennel_list">
        {musicArtist.map(item => (
        <li key={item.id}>   
            <div className="status"><img src={item.img}></img></div>
            <div className="label">{item.label}</div>  
            
        </li>
        ))}
    </ul>
    );

    
const ControlMusic = () => (
    <ul className="chennel_list">
        {musicList.map(item => (
        <li key={item.id}>   
            <div className="status"><img src={item.img}></img></div>
            <div className="label">{item.label}</div> 
            <div className="description">{item.description}</div> 
            
        </li>
        ))}
    </ul>
    );
      

    return ( 
        

      <div className="facility_widget-content">
            <div className="control_music"> 
                            
                            <h5>CONTROL MUSIC</h5>  

                            <div className="widget_wrapper channel_wrapper">

                                <div className="widget_wrapper-top">
                                    <SearchBox value={inputValue} onChange={(newValue) => { setInputValue(newValue) }} /> 

                                    <div className="control_light-content">   
                                    <Checkbox onChange={onChangeCheckboxDefMain} checked={defCheckStateMain} type="switch-box"/>  
                                    </div> 
                                </div> 
                        
                                <div className="chennels music">
                                    <h6>New Releases</h6> 
                                    <ControlMusic /> 
                                </div> 

                                <div className="chennels music">
                                    <h6>Trending English</h6> 
                                    <ControlMusic /> 
                                </div>

                                <div className="chennels music popular_artists">
                                    <h6>Popular Artists</h6> 
                                    <PopularArtist /> 
                                </div>

                                <div className="chennels music">
                                    <h6>New Releases</h6> 
                                    <ControlMusic /> 
                                </div> 

                            </div> 

                       </div>

        </div>
    );
   
}
  

export default MusicControllWidget;