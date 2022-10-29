import * as React from "react"; 
 
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
 

interface IWidgetProps{
     
} 

 

 const ExchangeRateWidget: React.FunctionComponent<IWidgetProps> = (props) => {

  
    let [selected, setSelected] = React.useState<string | null>("op-1"); 
    let [inputValue, setInputValue] = React.useState<string | null>("10.00 USD"); 

    const [buttonText, setButtonText] = React.useState("Convert"); 
      

    return (
      <div className="exchange_widget widget">   

      <div className="title">  Currency Exchange Rates </div>

              <div className="exchange_widget_content">   

                      <div className="exchange_widget-top">
                          <FormField inline backgroundColor="white"> 

                              <Input  className="exchange_input"
                                  type="text"
                                  value={inputValue}
                                  onChange={(value) => { setInputValue(value) }}
                                  isValid={inputValue ? inputValue.trim().length > 0 : null} 
                                  placeholder="10.00 USD"
                              /> 

                              <Select
                                  selected={selected}
                                  options={[
                                      { label: "USD", value: "op-1"},
                                      { label: "Singapore Dollar", value: "op-2" },
                                      { label: "Slovak Koruna", value: "op-3" },
                                      { label: "Sloevenian Tolar", value: "op-4" },
                                      { label: "Soloman Islands Dollar", value: "op-5" },
                                      { label: "Soloman Islands Dollar", value: "op-6" },
                                      { label: "Soloman Islands Dollar", value: "op-7" },
                                      { label: "Soloman Islands Dollar", value: "op-8" },
                                      { label: "Soloman Islands Dollar", value: "op-9" },
                                      { label: "Soloman Islands Dollar", value: "op-10" },
                                      { label: "Soloman Islands Dollar", value: "op-11" },
                                      { label: "Us Dollar", value: "op-12" },
                                  ]}
                                  onChange={(value) => { setSelected(value) }}
                                  placeholder=" -- select --"
                                  isValid
                              /> 

                             <div className="equal_arrow"><img src='https://static.iviva.com/images/Udhayimages/Hotel/arrow-right.svg'></img></div>
                              
                              <Select
                                  selected={selected}
                                  options={[
                                      { label: "EURO", value: "op-1" },
                                      { label: "DINAR", value: "op-2" },
                                      { label: "USD", value: "op-3" },
                                  ]}
                                  onChange={(value) => { setSelected(value) }}
                                  placeholder=" -- select --"
                                  isValid={false}
                              /> 

                          </FormField> 
                    
                    </div>

                    <div className="exchange_widget-bot"> 

                      <button className="btn showcase" type="submit" onClick={() => { setButtonText("10.36 Euro");}}>
                          {buttonText}
                      </button>

                    </div> 

              </div> 
              

      </div>
    );
 
}
 

export default ExchangeRateWidget;