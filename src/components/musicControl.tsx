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


      
var newrealse_List = [ 
    {
     "id": "1",
      "label": "Divide", 
      "description": "Ed Sheeran", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/EdSheeranDivide.jpg" 
    },
    {
        "id": "2",
        "label": "Mid Nights", 
        "description": "Taylor Swift", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Taylor-Swift-Midnights.png"
    },
    {
        "id": "3",
        "label": "Lemonade", 
        "description": "Beyonce", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/BeyonceLemonade.jpg"
    },
    {
        "id": "4",
        "label": "Anti", 
        "description": "Rihanna", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Rihanna_Anti.png"
    },
    {
        "id": "5",
        "label": "Wild Dream", 
        "description": "West Life", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Westlife_Wild_Dreams.png"
    } 
] 

const NewRealse = () => (
    <ul className="chennel_list">
        {newrealse_List.map(item => (
        <li key={item.id}>   
            <div className="status"><img src={item.img}></img></div>
            <div className="label">{item.label}</div> 
            <div className="description">{item.description}</div>  
        </li>
        ))}
    </ul>
    );
      

     
var trending_list = [ 
    {
     "id": "1",
      "label": "Divide", 
      "description": "Ed Sheeran", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Westlif_Spectrum.png" 
    },
    {
        "id": "2",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Westlife_Back_Home.jpg"
    },
    {
        "id": "3",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Know.jpg"
    },
    {
        "id": "4",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Taylor_Swift_Lover.png"
    },
    {
        "id": "5",
        "label": "Divide", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Justin_Bieber_Justice.png"
    } 
] 

const TreandingEnglish = () => (
    <ul className="chennel_list">
        {trending_list.map(item => (
        <li key={item.id}>   
            <div className="status"><img src={item.img}></img></div>
            <div className="label">{item.label}</div> 
            <div className="description">{item.description}</div> 
            
        </li>
        ))}
    </ul>
    );

 

var musicArtist = [ 
    {
     "id": "1",
      "label": "Ed Sheeran",   
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Ed_Shereran.jpg" 
    },
    {
        "id": "2",
        "label": "Adel",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Adel.jpeg"
    },
    {
        "id": "3",
        "label": "Taylor Swift",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Taylor-Swift.jpg"
    },
    {
        "id": "4",
        "label": "Justin Bieber",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Justin-Bieber.jpg"
    },
    {
        "id": "5",
        "label": "Rihanna",  
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Rihana1.jpg"
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
 
    
     
var recent_played_list = [ 
    {
     "id": "1",
      "label": "Hanges", 
      "description": "Hanges", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Justin_Bieber_Changes.png" 
    },
    {
        "id": "2",
        "label": "Purpose", 
        "description": "Hanges", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Justin_Bieber_-_Purpose.png"
    },
    {
        "id": "3",
        "label": "Equals", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/EdSheeran-Equal1.jpg"
    },
    {
        "id": "4",
        "label": "Lemonade", 
        "description": "Beyonce", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/BeyonceLemonade.jpg"
    },
    {
        "id": "5",
        "label": "Loud", 
        "description": "Rihanna", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Rihanna_Loud.png"
    } 
] 

const RecentyPlayed = () => (
    <ul className="chennel_list">
        {recent_played_list.map(item => (
        <li key={item.id}>   
            <div className="status"><img src={item.img}></img></div>
            <div className="label">{item.label}</div> 
            <div className="description">{item.description}</div> 
            
        </li>
        ))}
    </ul>
    );


    
     
var recent_control_list = [ 
    {
     "id": "1",
      "label": "Hanges", 
      "description": "Justin Bieber", 
      "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Rihanna__Talk_That_Talk.png" 
    },
    {
        "id": "2",
        "label": "Purpose", 
        "description": "Justin Bieber", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Lady_Gaga_Star_Is-born.jpeg"
    },
    {
        "id": "3",
        "label": "Equals", 
        "description": "Ed Sheeran", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Lady_Gaga_Chromatica.png"
    },
    {
        "id": "4",
        "label": "Lemonade", 
        "description": "Beyonce", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Maroon_5-V.png"
    },
    {
        "id": "5",
        "label": "Loud", 
        "description": "Rihanna", 
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/music/Maroon_5_Overexposed.png"
    } 
] 

const RecentyCotrol = () => (
    <ul className="chennel_list">
        {recent_control_list.map(item => (
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
                                    <NewRealse /> 
                                </div> 

                                <div className="chennels music">
                                    <h6>Trending English</h6> 
                                    <TreandingEnglish /> 
                                </div>

                                <div className="chennels music popular_artists">
                                    <h6>Popular Artists</h6> 
                                    <PopularArtist /> 
                                </div>

                                <div className="chennels music">
                                    <h6>Recently Played</h6> 
                                    <RecentyPlayed /> 
                                </div> 

                                <div className="chennels music">
                                    <h6>Recently Played</h6> 
                                    <RecentyCotrol /> 
                                </div>

                            </div> 

                       </div>

        </div>
    );
   
}
  

export default MusicControllWidget;