import * as React from "react"; 
 
interface IWidgetProps{
     
} 
   
  

const WeatherWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

        
    var weather_data = [ 
      {
      "id": "Monday",
        "label": "WED",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/sun.svg",
        "status":"Thunder"
      },
      {
      "id": "Tuesday",
        "label": "THU",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cloud-lightning.svg",
        "status":"Sunny"
      },
      {
      "id": "Wednesday",
        "label": "FRI",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cloud-drizzle.svg",
        "status":"Thunder"
      },
      {
      "id": "Thursday",
        "label": "SAT",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cloud.svg",
        "status":"Rainy"
      },
      {
      "id": "Friday",
        "label": "SUN",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/cloud-rain.svg",
        "status":"Thunder"
      },
      {
        "id": "Saturday",
        "label": "MON",
        "value": 23,
        "img": "https://static.iviva.com/images/Udhayimages/Hotel/sun.svg",
        "status":"Rainy"
      } 
    ] 
      
      const DayWeatherlist = () => (
          <ul className="daylist">
            {weather_data.map(item => (
              <li key={item.id}>   
                <div className="status"><img src={item.img}></img></div>
                <div className="label">{item.label}</div>
                <div className="value">{item.value}</div>
              </li>
            ))}
          </ul>
        ); 
          

        return ( 
            
                <div className="weather_widget widget">   

                    <div className="weather_widget-top">
                        <div className="perc-value">
                                <img src="https://static.iviva.com/images/Udhayimages/Hotel/humidity.png" />   
                            <p>30%</p>
                        </div>  
                    </div>  

                    <div className="weather_icon"><img src="https://static.iviva.com/images/Udhayimages/Hotel/sun.svg" /></div>  

                    <div className="weather-content"> 
                        <h4>32 <sup>o</sup><span>C</span></h4>
                        <p>Sunny Today</p>
                    </div>

                    <DayWeatherlist />    
                
                </div>  
        );
    
    }
 

export default WeatherWidget;