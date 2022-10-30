import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
import './styles.scss';

import {Avatar, Typography, Card, CardContent, Slider,  Radio, Box, List, Rating, ListItem, Divider, ListItemText, ListItemAvatar, InputLabel,  MenuItem,FormControl, SelectChangeEvent  } from '@mui/material'; 

import {useState} from "react";


 import SideBar from './components/sidebar';
 import TopBar from './components/topbar';
 
 import {
    Routes, 
    Route,
    HashRouter
  } from 'react-router-dom';
 

 import HomeWidget from './components/home';
 import TelevisionControlWidget from './components/televisionControl';
 import MusicControllWidget from './components/musicControl'; 
 import AirConditionerWidget from './components/airConditioner'; 
 import RoomServicesWidget from './components/roomServices';
 import LightControlWidget from './components/lightControl';
 

interface IUIProps {
    uxpContext?: IContextProvider,
     
}

// let [inputValue, setInputValue] = React.useState<string | null>("10.00 USD"); 

const HotelAppComponent: React.FunctionComponent<IUIProps> = (props) => {
    return (
        <div className="hotel_container">
            <HashRouter>


                  <SideBar/>  

                  <div className="content">

                        <TopBar />

                        <div className="overall_widget">
                            <Routes>
                                <Route path="/" element={<HomeWidget />} />
                                <Route path="room-services" element={<RoomServicesWidget />} />
                                <Route path="light-control" element={<LightControlWidget />} />
                                <Route path="air-conditioner" element={<AirConditionerWidget />} />
                                <Route path="music-control" element={<MusicControllWidget />} />
                                <Route path="television-control" element={<TelevisionControlWidget />} />

                             {/* <HomeWidget />    
                            
                             <RoomServicesWidget /> 

                             <LightControlWidget />  

                             <AirConditionerWidget/>  

                             <MusicControllWidget />   

                             <TelevisionControlWidget />   */}
                            </Routes>

                        </div> 

                </div>
             
            </HashRouter>
        </div>
    )
};

/**
 * Register as a Widget
 */
// registerWidget({
//     id: "HotelApp",
//     widget: HotelAppWidget,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "HotelApp",
    label: "HotelApp",
    // click: () => alert("Hello"),
    component: HotelAppWidget
}); 
*/

/**
 * Register as a UI
 */

 
registerUI({
    id:"hotel-app",
    component: HotelAppComponent,
    showDefaultHeader : false
});
 