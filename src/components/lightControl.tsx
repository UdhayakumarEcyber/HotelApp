import * as React from "react"; 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";

import {Avatar, Typography, Card, CardContent, Slider,  Radio, Box, List, Rating, ListItem, Divider, ListItemText, ListItemAvatar, InputLabel,  MenuItem,FormControl, SelectChangeEvent  } from '@mui/material';


interface IWidgetProps{
     
}  
 
 

  const LightControlWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showLightingWidget, setshowLightingWidget] = React.useState(false); 

    let [startDate, setStartDate] = React.useState<string | Date>(new Date());
    let [endDate, setEndDate] = React.useState<string | Date>(new Date());  

    let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    let [defCheckState1, setDefCheckState1] = React.useState<boolean>(false);
    let [defCheckState2, setDefCheckState2] = React.useState<boolean>(false);
    let [defCheckState3, setDefCheckState3] = React.useState<boolean>(false);

   const onChangeCheckboxDef = (checked: boolean) => {
        setDefCheckState(checked);
    } 

    const onChangeCheckboxDef1 = (checked: boolean) => {
        setDefCheckState1(checked);
    } 

    const onChangeCheckboxDef2 = (checked: boolean) => {
        setDefCheckState2(checked);
    } 

    const onChangeCheckboxDef3 = (checked: boolean) => {
        setDefCheckState3(checked);
    } 

    

var moodesList = [ 
    {
        "id": "1",
        "daylight_img": "https://static.iviva.com/images/Udhayimages/Hotel/Morning.png", 
        "daylight_name": "Morning" 
    },
    {
        "id": "2",
        "daylight_img": "https://static.iviva.com/images/Udhayimages/Hotel/Evening.png", 
        "daylight_name": "Evening" 
    },
    {
        "id": "3",
        "daylight_img": "https://static.iviva.com/images/Udhayimages/Hotel/Night.png", 
        "daylight_name": "Night" 
    }   
];



const Moodes = () => (
    <ul className="moodles_list">
      {moodesList.map(item => (
        <li key={item.id}>   
          <div className="pict"><img src={item.daylight_img} /></div>
          <div className="label">{item.daylight_name}</div> 
        </li>
      ))}
    </ul>
  ); 

  let [showRoomserviceModal, setshowRoomserviceModal] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

      

    return ( 
        

      <div className="facility_widget-content">
            <div className="control_lights">   
                   <h5>CONTROL LIGHTING</h5>  

                   <div className="row">
                        <div className="control_light all_light">
                            <TitleBar title={'All Lights'} /> 

                            <div className="control_light-content">   
                                    <Checkbox onChange={onChangeCheckboxDef} checked={defCheckState} type="switch-box"/>  
                            </div> 

                        </div>

                        <div className="control_light schedule_light">
                            <TitleBar title={'Schedule Lighting'} /> 

                            <div className="control_light-content">   
                                <TimeRangePicker startTime={startDate} endTime={endDate} onChange={(s, e) => { setStartDate(s); setEndDate(e); } } title={""} />
                            </div> 

                        </div>

                        <div className="control_light moodes">
                            <TitleBar title={'Moodes'} /> 

                            <div className="control_light-content">   
                                <Moodes/>  
                            </div>  
                        </div>
                  </div>

                  <div className="row">

                <div className="control_light wall_light">
                    <TitleBar title={'Wall Light'}> 
                            <Checkbox onChange={onChangeCheckboxDef1} checked={defCheckState1} type="switch-box"/>
                    </TitleBar> 

                    <div className="control_light-content">   
                        
                        <div className="light_pict"  onClick={() => setshowRoomserviceModal(true)}>
                            <img src="https://static.iviva.com/images/Udhayimages/Hotel/big-light.png"/> 
                        </div> 

                        <Modal title ={'Wall Light'} show={showRoomserviceModal} onOpen={() => { }} onClose={() => setshowRoomserviceModal(false)} >
            
                                <WidgetWrapper className="roomservices_popup light-popup">   

                                    <div className="roomservices_popup-content">    
                                        
                                            <div className="light-box">
                                                <div className="light-box-top"></div> 
                                            </div>

                                        <div className="mood_light_change">
                                            <Radio {...controlProps('a')} />
                                            <Radio {...controlProps('b')} color="secondary" />
                                            <Radio {...controlProps('c')} color="success" />
                                            <Radio {...controlProps('d')} color="default" /> 
                                        </div>
                                            
                                    </div>  

                                </WidgetWrapper>

                            </Modal> 

                        
                        
                        
                        <div className="light_slider">  
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </div>


                    </div>  
                </div>
                
                <div className="control_light ceiling_light">
                    <TitleBar title={'Ceiling Light'}> 
                            <Checkbox onChange={onChangeCheckboxDef2} checked={defCheckState2} type="switch-box"/>
                    </TitleBar> 

                    <div className="control_light-content">   
                            <div className="light_pict"><img src="https://static.iviva.com/images/Udhayimages/Hotel/big-light.png"/></div>

                        <div className="light_slider">  
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </div>

                    </div>  
                </div>
                
                <div className="control_light lamp_light">
                    <TitleBar title={'Bedside Lamp'}> 
                            <Checkbox onChange={onChangeCheckboxDef3} checked={defCheckState3} type="switch-box"/>
                    </TitleBar> 

                    <div className="control_light-content">   
                        <div className="light_pict"><img src="https://static.iviva.com/images/Udhayimages/Hotel/big-light.png"/></div>

                        <div className="light_slider">  
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </div>

                    </div>  
                </div>


                </div>

                    

                </div> 

        </div>
    );
   
}
  

export default LightControlWidget;