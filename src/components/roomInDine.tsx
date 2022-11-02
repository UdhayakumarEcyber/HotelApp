// import * as React from "react"; 
// import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
// import {useState} from "react";

// interface IWidgetProps{
     
// }  

  
// const RoomDineWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

//     let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);
//     let [showLinkWidget, setShowLinkWidget] = React.useState(false); 
     


//     return ( 
        

//       <div className="facility_widget-content">
//             <div className="room_services">   
//                     <h5>IN ROOM DINE</h5>  

//                     <div className="widget_wrapper page_progress-wrapper">
//                         <h2>Page In Progress...</h2>  
//                     </div>  

//             </div> 

//         </div>
//     );
   
// }
  

// export default RoomDineWidget;




 

import * as React from 'react';
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label,   Input, LinkWidgetContainer, Modal } from "uxp/components";
import {Button, Dialog, AppBar, Toolbar, IconButton, Slide } from '@mui/material'; 
import {useState} from "react";

import { TransitionProps } from '@mui/material/transitions'; 
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'; 
import LocalMallIcon from '@mui/icons-material/LocalMall';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 

export default function RoomDineWidget() {
  const [open, setOpen] = React.useState(false);

  let [showModal, setShowModal] = React.useState(false); 
  let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);
  let [showLinkWidget, setShowLinkWidget] = React.useState(false); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  
var dataset1 = [ 
  {
   "id": "Breakfast",
    "label": "Breakfast", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Ramen2.jpg"  
  },
  {
   "id": "Asian",
    "label": "Asian", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Nasi-Lemak.jpg"  
  },
  {
   "id": "Italian",
    "label": "Italian", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Italian.jpeg" 
  },
  {
   "id": "FastFood",
    "label": "Fast Food", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Chinese-food2.jpg" 
  },
  {
   "id": "Beverages",
    "label": "Beverages", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/beverage2.jpg"
  },
  {
    "id": "Desserts",
    "label": "Desserts", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Spring-Strawberry-Cake.jpg" 
  },
  {
    "id": "Chinese",
    "label": "Chinese", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Chinese-food.jpg" 
  },
  {
    "id": "Tea/Drinks",
    "label": "Tea/Drinks", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Tea_Drinks.jpg" 
  } 
];


var orderItem = [ 
  {
      "id": "1",
      "order_name": "Nasi Lemak", 
      "order_prize": "$20.00"  
  }   
];


var orderFood = [ 
  {
      "id": "1",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Nasi-Lemak.jpg", 
      "food_name": "Nasi Lemak", 
      "food_prize": "$20.00"  
  },
  {
      "id": "2",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Chicken-rice.jpg", 
      "food_name": "Chicken Rice", 
      "food_prize": "$20.00"  
  },
  {
      "id": "3",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Friedrice.jpg", 
      "food_name": "Chicken Fried Rice", 
      "food_prize": "$20.00"  
  },
  {
      "id": "4",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Chinese-food.jpg", 
      "food_name": "Chinese Food", 
      "food_prize": "$20.00"  
  },
  {
      "id": "5",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Wrap3.jpg", 
      "food_name": "Chicken Wrap", 
      "food_prize": "$20.00"  
  },
  {
      "id": "6",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Prata3.jpeg", 
      "food_name": "Parata", 
      "food_prize": "$20.00"  
  },
  {
      "id": "7",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Nasi-Lemak.jpg", 
      "food_name": "Nasi Lemak", 
      "food_prize": "$20.00"  
  },
  {
      "id": "8",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/Food/Nasi-Lemak.jpg", 
      "food_name": "Nasi Lemak", 
      "food_prize": "$20.00"  
  }   
];



const FoodList = () => (
  <ul className="foodlist">
    {dataset1.map(item => (
      <li key={item.id}>   
        <div className="pict"><img src={item.img} /></div>
        <div className="label">{item.label}</div> 
      </li>
    ))}
  </ul>
); 

const OrderList = () => (
  <ul className="orderlist">
    {orderItem.map(item => (
      <li key={item.id}>    
        <div className="order-id">{item.id}</div>  
        <div className="order-name">{item.order_name}</div> 
        <div className="order-prize">{item.order_prize}</div> 
      </li>
    ))}
  </ul>
);




const OrderListFood = () => (
  <ul className="orderfood_list">
    {orderFood.map(item => (
      <li key={item.id}>  
        {/* <button className="food_add-btn" onClick={() => setShowModal(true)}>+</button>  */}
        <button className="btn showcase food_add-btn" type="submit" onClick= {() => setshowRoomserviceModal(true)} >+</button>  
        <div className="order-img"><img src={item.food_img} /></div>  
        <div className="order-name">{item.food_name}</div> 
        <div className="order-prize">{item.food_prize}</div> 
      </li>
    ))}
  </ul>
);



let [num, setNum]= useState(0);
let incNum =()=>{
  if(num<10)
  {
  setNum(Number(num)+1);
  }
};
let decNum = () => {
   if(num>0)
   {
    setNum(num - 1);
   }
}
let handleChange = (e:any)=>{
 setNum(e.target.value);
}


  return (

    <>
 
    

    <div className="deal_widget deal_offer">   


        <div className="facility_widget-content"> 

        <div className="facility_details">

              <div className="food_offers ">
                  <h6>IN ROOM <span>DINE</span> </h6>
                  <h3>Get food delivered to your room step.   <div className="offer_percentage"> 15% OFF</div></h3>
              </div>

              <div className="food_category widget_wrapper">   
                      <h5>Food Categories</h5>  
                      <FoodList /> 

                      <div className="my_order">
                          
                          <div className="title"> My Order </div>

                          <div className="my_order-content">

                              <OrderList />

                              <ul className="orderlist total_orderlist">
                                
                                  <li>     
                                      <div className="order-name">Total Amount</div> 
                                      <div className="order-prize">$20.00</div> 
                                  </li> 
                                  
                              </ul>

                              <button className="checkout">Check out</button> 

                          </div> 

                      </div>


                      <div className="my_order_food widget_wrapper"> 
                          
                          <div className="title"> Pizza </div>

                          <div className="my_order_food-content">

                              <OrderListFood />  

                              
                              <Modal title ={'Nasi Lemak'} show={showRoomserviceModal} onOpen={() => { }} onClose={() => setshowRoomserviceModal(false)} >
                       
                                  <WidgetWrapper className="roomservices_popup food_order_popup">   

                                      <div className="roomservices_popup-content food_order_popup_content">  

                                        <em>$20.00</em>

                                        <p>Malaysian coconut milk rice, served with sambal, fried crispy anchovies, toasted peanuts and cucumber.</p>

                                       <h6>Special Note</h6>
                                      
                                       <textarea>Add a note (e.g. no onions)</textarea>

                                          <div className="inc-dec-btn"> 
                                              <div className="inc-dec-btn-cont"> 
                                                
                                                  <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                              
                                                  <input type="text" className="form-control" value={num} onChange={handleChange}/>
                                              
                                                  <button className="btn btn-outline-primary rt-btn" type="button" onClick={incNum}>+</button>
                                              
                                              </div>
                                          </div>

                                          <div className="food_order_popup-btn"> 
                                              <button className="btn showcase" type="submit" onClick={() => setShowLinkWidget(true)}>
                                                      Add 1 to Basket  <span>$20.00</span>
                                              </button>
                                          </div>
                                              
                                      </div>  

                                  </WidgetWrapper>

                              </Modal> 


                          </div> 

                      </div>

                      </div>
              </div>

              </div>  
        </div>  
    </>
  );
}
