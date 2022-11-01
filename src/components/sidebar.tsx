import * as React from "react";
import {Link} from "react-router-dom";

// import {Routes, Route, useNavigate} from 'react-router-dom';


// import HomeWidget from './home';
// import TelevisionControlWidget from './televisionControl';
// import MusicControllWidget from './musicControl'; 
// import AirConditionerWidget from './airConditioner'; 
// import RoomServicesWidget from './roomServices';
// import LightControlWidget from './lightControl';
 
 
interface IWidgetProps{
     
}  
interface IParkingState{
     
}  

import HomeIcon from '@mui/icons-material/Home';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import FlatwareIcon from '@mui/icons-material/Flatware';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AirIcon from '@mui/icons-material/Air';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TvIcon from '@mui/icons-material/Tv';

 const SideBar: React.FunctionComponent<IWidgetProps> = (props) => {  

     

    return (
        <div className="sideBar">

            <div className="logo">
                <img src="https://static.iviva.com/images/Udhayimages/Hotel/Hilton-logo-white.png" title="Logo"/> 
            </div>


         <ul>
            <li >
                <a href="#/"><span className="sidebar-icon"><HomeIcon /></span> <em>HOME</em></a>
            </li>
            <li>
                <a href="#/hotel-services"><span className="sidebar-icon"><SmsFailedIcon /></span> <em>HOTEL SERVICES</em></a>
            </li>
            <li>
                <a href="#/room-services"><span className="sidebar-icon"><RoomServiceIcon /></span> <em>ROOM SERVICE</em></a>
            </li>
            <li>
                <a href="#/hotel-dine"><span className="sidebar-icon"><FlatwareIcon /></span> <em>IN ROOM DINE</em></a>
            </li>
            <li>
                <a href="#/light-control"><span className="sidebar-icon"><EmojiObjectsIcon /></span> <em>LIGHTING</em></a>
            </li>
            <li>
                <a href="#/air-conditioner"><span className="sidebar-icon"><AirIcon /></span><em> A/C</em></a>
            </li>
            <li>
                <a href="#/music-control"><span className="sidebar-icon"><MusicNoteIcon /></span><em> MUSIC</em></a>
            </li>
            <li>
                <a href="#/television-control"><span className="sidebar-icon"><TvIcon /></span> <em>TV</em></a>
            </li>
        </ul>  
        

    </div> 

    );
 }
 
 

  export default SideBar;

function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
 