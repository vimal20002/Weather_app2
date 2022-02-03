import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Carditem from './components/Carditem';

export default class App extends Component {

  state = { latitude: null, longitude: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude })
    );
}

  
    
    


   
  render() {

  
    return (
      <>

 
 <Navbar/>
     <Carditem lt={this.state.latitude} lg={this.state.longitude}/>
      </>
    )
  }

      }