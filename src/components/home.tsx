import * as React from "react"; 

import WeatherWidget from './weather';
import ExchangeRateWidget from './exchangeRate';
import HotelVideoWidget from './hotelVideo';
// import SwimmingPoolWidget from './swimmingPool';

import SwimmingPoolWidget from './swimmingDet';
import Massage_parlourWidget from './massage_parlourDet';
import GymnasiumWidget from './gymnasiumDet';
import HotelClubWidget from './hotelClubDet';

// import HotelClubWidget from './hotelClub';
// import GymnasiumWidget from './gymnasium';

// import Massage_parlourWidget from './massage_parlour';
import BloodmaryWidget from './bloodmary';
// import DealWidget from './deals';
import DealWidget from './deals_Det';


 
interface IParkingState{
     
} 
     
    
 
export default class HomeWidget extends React.Component<{},IParkingState> { 

    
  render() {
      

    return (
        <div className="home_widgets">   

            <div className="row">
                <WeatherWidget />  
                <ExchangeRateWidget />  
            </div>

            <div className="row">
                <HotelVideoWidget />   
            </div>

            <div className="row">

                <SwimmingPoolWidget/>  
                <HotelClubWidget/> 
                <GymnasiumWidget /> 
                <Massage_parlourWidget />

            </div>  

            <div className="row"> 
                <BloodmaryWidget/>  
            </div> 

            <div className="row">

                <DealWidget/>     

            </div>   
            
                
        </div>  

    );
  }
}
 