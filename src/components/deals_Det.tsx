// import * as React from "react"; 
 
// import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
 

// interface IWidgetProps{
     
// } 

 

//  const DealWidget: React.FunctionComponent<IWidgetProps> = (props) => {

  
// let [showFoodWidget, setshowFoodWidget] = React.useState(false); 


  
      

//     return (

//         <div className="deal_widget">  

//          <div className="title">  Deals </div> 

//         <div className="deal_widget-content">   
        
//             <div className="deal_widget-content-lft">  
//                 <p>BUY ANY MEDIUM PIZZA &nbsp; GET A CLASSIC PERSONAL PAN PIZZA FOR</p> 
//                 <button className="prize"  onClick={() => setshowFoodWidget(true)}>Rs. 500</button> 
//             </div>

//             <div className="deal_widget-content-rgt">   
//                 <div className="pizza"><img src='https://static.iviva.com/images/Udhayimages/Hotel/pizza.png'></img></div> 
//             </div> 

//         </div>  
        

//         <LinkWidgetContainer  className="facility_widget" show={showFoodWidget} > 

//             <div className="modal-header">
                
//                 <div className="facility_widget-top"> 

//                     <div className="model_close"  onClick={() => setshowFoodWidget(false)}></div> 

//                 </div>  
            
//             </div> 
 

//             <div className="facility_widget-content"> 

//                 <div className="food_offers">
//                     <h6>IN ROOM <span>DINE</span> </h6>
//                     <h3>Get food delivered to your room step.   <div className="offer_percentage"> 15% OFF</div></h3>
//                 </div>

//                 <div className="food_category">   
//                         <h5>Food Categories</h5>  
//                         <FoodList /> 

//                         <WidgetWrapper className="my_order">
//                             <TitleBar title={'My Order'} /> 

//                             <div className="my_order-content">

//                                 <OrderList />

//                                 <ul className="orderlist total_orderlist">
                                   
//                                     <li>     
//                                         <div className="order-name">Total Amount</div> 
//                                         <div className="order-prize">LKR 700.00</div> 
//                                     </li> 
                                    
//                                 </ul>

//                                 <button className="checkout">Check out</button> 

//                             </div> 

//                         </WidgetWrapper>


//                         <WidgetWrapper className="my_order_food">
//                             <TitleBar title={'Pizza'} /> 

//                             <div className="my_order_food-content">

//                                 <OrderListFood />  

//                             </div> 

//                         </WidgetWrapper>


//                  </div>

//             </div> 
    
//         </LinkWidgetContainer>

//     </div>
//     );
 
// }
 

// export default DealWidget;




import * as React from 'react';
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label,   Input, LinkWidgetContainer, Modal } from "uxp/components";
import {Button, Dialog, AppBar, Toolbar, IconButton, Slide } from '@mui/material'; 

import { TransitionProps } from '@mui/material/transitions';

 
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  
var dataset1 = [ 
  {
   "id": "Burgers",
    "label": "Burgers", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/burger.jpg"  
  },
  {
   "id": "Pizza",
    "label": "Pizza", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg"  
  },
  {
   "id": "Indian",
    "label": "Indian", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Indian.jpg" 
  },
  {
   "id": "Chinese",
    "label": "Chinese", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Chinese.jpg" 
  },
  {
   "id": "Bakery",
    "label": "Bakery", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/burger.jpg"
  },
  {
    "id": "Desserts",
    "label": "Desserts", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Desserts.jpg" 
  },
  {
    "id": "Fast Food",
    "label": "Fast Food", 
    "img": "https://static.iviva.com/images/Udhayimages/Hotel/Fast_Food.webp" 
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
      "order_name": "Bacon cheese pizza", 
      "order_prize": "LKR 700.00"  
  }   
];


var orderFood = [ 
  {
      "id": "1",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "2",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "3",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "4",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "5",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "6",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "7",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
  },
  {
      "id": "8",
      "food_img": "https://static.iviva.com/images/Udhayimages/Hotel/pizza1.jpg", 
      "food_name": "Bacon cheese pizza", 
      "food_prize": "LKR.1500.00"  
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
        <button className="food_add-btn">+</button>  
        <div className="order-img"><img src={item.food_img} /></div>  
        <div className="order-name">{item.food_name}</div> 
        <div className="order-prize">{item.food_prize}</div> 
      </li>
    ))}
  </ul>
);



  return (
    

    <div className="deal_widget">  

        <div className="title">  Deals </div> 
    
         <div className="deal_widget-content">   
            
            <div className="deal_widget-content-lft">  
              <p>BUY ANY MEDIUM PIZZA &nbsp; GET A CLASSIC PERSONAL PAN PIZZA FOR</p> 
              <button className="prize"   onClick={handleClickOpen}>Rs. 500</button> 
          </div>

            <div className="deal_widget-content-rgt">   
              <div className="pizza"><img src='https://static.iviva.com/images/Udhayimages/Hotel/pizza.png'></img></div> 
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
                                      <div className="order-prize">LKR 700.00</div> 
                                  </li> 
                                  
                              </ul>

                              <button className="checkout">Check out</button> 

                          </div> 

                      </div>


                      <div className="my_order_food widget_wrapper"> 
                          
                          <div className="title"> Pizza </div>

                          <div className="my_order_food-content">

                              <OrderListFood />  

                          </div> 

                      </div>

                      </div>
              </div>

              </div> 

            {/* <GymnasiumDetails /> */}
        
      </Dialog>
    </div>
  );
}
