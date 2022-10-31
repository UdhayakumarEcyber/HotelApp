import * as React  from "react";
// import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, Checkbox, RadialGauge, TimeRangePicker, SearchBox, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
 
 
interface IParkingProps{
    // uxpContext?: IContextProvider;
    isActive: string;
    sqSize : any;
    strokeWidth: any;
    percentage: any;
} 

interface IParkingState{ 
     percentage: any;
} 



 class CircularProgressBar extends React.Component<IParkingProps,IParkingState>{
  static defaultProps: { sqSize: number; percentage: any; strokeWidth: number; };
  constructor(props:any) {
    super(props);
    this.state = {percentage: ''};
  }

  render() { 
    const sqSize = this.props.sqSize; 
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2; 
    const viewBox = `0 0 ${sqSize} ${sqSize}`; 
    const dashArray = radius * Math.PI * 2; 
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`} />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle">
            {`${this.props.percentage}`}&deg; C
          </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5
};

export default class App extends React.Component<{},IParkingState> {
  constructor(props:any) {
    super(props);

    this.state = {
      percentage: 25
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event:any) {
    this.setState({
    //  percentage: event.target.value
    percentage: (event.target as HTMLInputElement).value
    });
  }

 

  render() {
    return (
      <div className="progressbar_wrapper">

        <CircularProgressBar strokeWidth={24} sqSize={240} percentage={this.state.percentage} isActive={undefined}/>
        
          <div className="progressBar">
              <em>Fan Speed</em>
              <ul>
                  <li><a href="">1</a></li>
                  <li><a href="">2</a></li>
                  <li><a href="">3</a></li>
                  <li><a href="">4</a></li>
              </ul>
            <input 
              id="progressInput" 
              type="range" 
              min="0" 
              max="100" 
              step="1" 
              value={this.state.percentage}
              onChange={this.handleChangeEvent}/>
          </div>

        </div>
    );
  }
}


 