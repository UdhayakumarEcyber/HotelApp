 

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

 

export default function DealWidget() {
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
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/burger.jpg"
  },
  {
    "id": "Desserts",
    "label": "Desserts", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Desserts.jpg" 
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
      "food_name": "Nasi Lemak", 
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
        <button className="food_add-btn" onClick={() => setShowModal(true)}>+</button>  
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

    
        <div className="deal_widget">  

                <div className="title">  Deals </div> 

                <div className="deal_widget-content">   
                    
                    <div className="deal_widget-content-lft">  
                      <p>BUY ANY MEDIUM PIZZA &nbsp; GET A CLASSIC PERSONAL PAN PIZZA FOR</p> 
                      <button className="prize">$ 30 only</button> 
                  </div>

                    <div className="deal_widget-content-rgt">   
                      <div className="pizza"><img src='https://static.iviva.com/images/Udhayimages/Hotel/pizza.png'></img></div> 
                  </div> 

                </div>   
        
        </div>
    

    <div className="deal_widget deal_offer">  

        {/* <div className="title">  Deals </div>  */}
    
         <div className="deal_widget-content">   
            
            <div className="deal_widget-content-lft" style={{width: "100%"}}>
              <h2>10% OFF</h2>  
              <p>ON YOUR FIRST INROOM DINNING TRANSACTION.</p> 
              <button className="prize"   onClick={handleClickOpen}>Order Now</button> 
          </div> 
        </div>  

         

     
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <KeyboardBackspaceIcon />

              <h3>Deals Details</h3>
            </IconButton>
          
          </Toolbar>
        </AppBar>  


        <div className="facility_widget-content"> 

        <div className="facility_details" style={{paddingTop:'2em'}}>

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

                              
                              <Modal title ={'Deals Popup'} show={showRoomserviceModal} onOpen={() => { }} onClose={() => setshowRoomserviceModal(false)} >
                       
                                    <WidgetWrapper className="roomservices_popup">   

                                        <div className="roomservices_popup-content">    
                                            
                                            <div className="roomservices-box">

                                                 <LocalMallIcon />  
                                                     
                                            </div>

                                            <div className="inc-dec-btn"> 
                                                <div className="inc-dec-btn-cont"> 
                                                 
                                                    <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                                
                                                    <input type="text" className="form-control" value={num} onChange={handleChange}/>
                                                
                                                    <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                                
                                                </div>
                                            </div>

                                            <button className="btn showcase" type="submit" onClick={() => setShowLinkWidget(true)}>
                                                    Add 1 to Basket  <span>LKR 500.00</span>
                                            </button>
                                                
                                        </div>  

                                    </WidgetWrapper>

                                </Modal> 


                          </div> 

                      </div>

                      </div>
              </div>

              </div> 

            {/* <GymnasiumDetails /> */}


            
        
      </Dialog>
    </div>

    </>
  );
}
