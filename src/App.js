import React from 'react';
import Properties from "./components/properties/properties"
import Message from "./components/message/message"

import 'whatwg-fetch'
import './App.scss';
const serviceApi = "http://localhost:4000/properties";
class App extends React.Component {

  state = {
    properties: null,
    error: null,
    setLoadingIcon: false
  }
  componentDidMount() {
    this.getServiceApi();
    //show loading icon if not loaded within 1 second
    setTimeout(() => {
      this.setState({setLoadingIcon: true});
    }, 1000);
  }

  getServiceApi = () => {
    //use setTimeout to break event loop
    setTimeout(() => {fetch(serviceApi).then(
      (response) => {
        return response.json()
    }).then(
      (json) => {
        this.setState({properties: json});
      }).catch((err) => {
        const message = err.message;
        this.setState({error: message});
      }); }, 0);
  }

  clearError = () => {
    this.setState({error: null});
    if (this.state.properties === null) {
      this.getServiceApi();
    }
  }

  render() {
    const {properties, error, setLoadingIcon} = this.state;
    /*To Check the Loading icon make server response slow 
    or just turn it off
  
    2. see it here https://codepen.io/bryanrasmussen/pen/vYLMaBj

    */
   const errMessage = (error) ? error : (window.errMessage) ? window.errMessage : "";
    return (<div className="App">
      <h1>Novasol frontend challenge</h1>
      {!error && !properties && setLoadingIcon &&
        <div title="House by Marina Pugacheva from the Noun Project">
          <svg viewBox="0 0 288.96 110.7875" x="0px" y="0px">
            <defs>
              <filter id="iconfilter" primitiveUnits="objectBoundingBox" >
                <feFlood flood-color="green"/>     
                <feOffset>
                  <animate attributeName="dy" from="1" to="0" dur="4s" repeatCount="indefinite" />
                </feOffset> 
                
                <feComposite operator="in" in2="SourceGraphic" />
                <feComposite operator="over" in2="SourceGraphic" />   
              </filter>
            </defs>
            <g id="house" filter="url(#iconfilter)">
              <path 
                    d="M84.34,95.68H13.66V50.82H4.5L49.69,7.05,93.46,50.82H84.34ZM15,94.32H83V49.46h7.2L49.67,9,7.86,49.46H15Z" 
                    transform="translate(-4.5 -7.05)"/>
              <path 
                    d="M58.52,95.68h-19V63.05h19ZM40.84,94.32H57.16V64.41H40.84Z" 
                    transform="translate(-4.5 -7.05)"/>
              <path 
                    d="M49,40a7.48,7.48,0,1,1,7.48-7.48A7.49,7.49,0,0,1,49,40Zm0-13.6a6.12,6.12,0,1,0,6.12,6.12A6.13,6.13,0,0,0,49,26.35Z" 
                    transform="translate(-4.5 -7.05)"/>
              <polygon 
                      points="18.62 27.28 17.38 27.28 17.38 7.33 27.62 7.33 27.62 19.01 26.38 19.01 26.38 8.58 18.62 8.58 18.62 27.28"/>
            </g>
        </svg>
      </div>
      }
      <Message messageType="error" message={errMessage} clear={this.clearError}/>
      <Properties properties={properties} />
      
      
    </div>);
  }

}

export default App;
