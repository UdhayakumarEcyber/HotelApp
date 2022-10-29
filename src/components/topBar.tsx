import * as React from "react"; 
 
interface IParkingState{
     
} 
  
 
export default class TopBar extends React.Component<{},IParkingState> { 

  render() {
    return (
        <div className="modal-header">  
        
            <div className="modal-header_lft"> 
                <h6>Good day Mohan,</h6>
                <h3>Take Control</h3>
                <div className="user_pict"></div>
            </div>   
        
            <div className="modal-header_rgt">  
                <p>Room 200 <br/>
                September 21,2022</p>
            </div>  
        </div>  
    );
  }
}
 