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
      "label": "CNN", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/CNN.png" 
    },
    {
        "id": "2",
        "label": "CCTV", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/CCTV-News.png"
    },
    {
        "id": "3",
        "label": "BBC NEWS", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/BBC.png"
    },
    {
        "id": "4",
        "label": "Fox News", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Fox-News.png"
    },
    {
        "id": "5",
        "label": "Sky News", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/SKY-News.jpeg"
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
     


      
var entertainmentList = [ 
    {
     "id": "1",
      "label": "Cartoon Network", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/CartoonNetwork.png" 
    },
    {
        "id": "2",
        "label": "HBO", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/HBO.png"
    },
    {
        "id": "3",
        "label": "NickJr", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Nickjunior.png"
    },
    {
        "id": "4",
        "label": "Youtube", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/youtube.png"
    },
    {
        "id": "5",
        "label": "Netflix", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Netflix.png"
    } 
] 
    
    const EntertainmentChannel = () => (
        <ul className="chennel_list">
          {entertainmentList.map(item => (
            <li key={item.id}>   
              <div className="status"><img src={item.img}></img></div>
              <div className="label">{item.label}</div> 
            </li>
          ))}
        </ul>
      );
      

      
var moviesList = [ 
    {
     "id": "1",
      "label": "Warner Bros 2", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Warner-Bro-2.png" 
    },
    {
        "id": "2",
        "label": "Disney +", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Disney-plus.png"
    },
    {
        "id": "3",
        "label": "Warner Bros", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/WarnerBro.png"
    },
    {
        "id": "4",
        "label": "Celestial Movies", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/youtube.png"
    },
    {
        "id": "5",
        "label": "Disney", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/Disney.png"
    } 
] 
    
    const MoviesChannel = () => (
        <ul className="chennel_list">
          {moviesList.map(item => (
            <li key={item.id}>   
              <div className="status"><img src={item.img}></img></div>
              <div className="label">{item.label}</div> 
            </li>
          ))}
        </ul>
      );


      
      
var sportsList = [ 
    {
     "id": "1",
      "label": "Espn", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/ESPN.png" 
    },
    {
        "id": "2",
        "label": "Espn", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/ESPN.png"
    },
    {
        "id": "3",
        "label": "Espn", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/ESPN.png"
    },
    {
        "id": "4",
        "label": "Espn", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/ESPN.png"
    },
    {
        "id": "5",
        "label": "Espn", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/tv/ESPN.png"
    } 
] 
    
    const SportsChannel = () => (
        <ul className="chennel_list">
          {sportsList.map(item => (
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
                    <h6>Entertainment Tv Channels</h6> 
                    <EntertainmentChannel /> 
                </div>

                <div className="chennels">
                    <h6>Movies Tv Channels</h6> 
                    <MoviesChannel /> 
                </div>

                <div className="chennels">
                    <h6>Sports Tv Channels</h6> 
                    <SportsChannel /> 
                </div> 
            </div> 
        </div> 

        </div>
    );
   
}
  

export default TelevisionControlWidget;