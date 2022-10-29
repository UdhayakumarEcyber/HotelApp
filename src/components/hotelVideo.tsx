import * as React from "react"; 

import ReactPlayer from 'react-player'
 
interface IParkingState{
     
} 
    
// import { Player, ControlBar } from 'video-react';
 
export default class HotelVideoWidget extends React.Component<{},IParkingState> { 

    
  render() {
      

    return (
          <div className="Hotel_video_widget widget">   

            {/* <ReactPlayer url='https://www.youtube.com/watch?v=5L7IgdJuKLQ' controls/> */}

              <ReactPlayer width="100%" height="100%" controls  playing url={[
                {src: 'https://static.iviva.com/images/Udhayimages/Hotel/sunny.mp4', type: 'video/mp4'} 
              ]}
            />  
                            
        </div> 
    );
  }
}
 