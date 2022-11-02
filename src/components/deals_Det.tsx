 

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
              {/* <button className="prize"   onClick={handleClickOpen}>Order Now</button>  */}
              <button className="prize">Order Now</button> 
          </div> 
        </div>   
    </div>

    </>
  );
}
