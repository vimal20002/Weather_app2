import React, { Component } from 'react'
import logo from '../media/logo.png'
import da from '../media/da.png'

export default class Navbar extends Component {
  render() {
    let c=0;
   const navHandle=()=>{
     if (c%2==0) {
             document.getElementById('nav').style.height="12rem"
            document.getElementById('da').style.top="180px"
            document.getElementById('da').style.transform="rotate(180deg)"


     }
     else{
      document.getElementById('nav').style.height="4.5rem"
      document.getElementById('da').style.top="57px"
      document.getElementById('da').style.transform="rotate(0deg)"

     }
     c++;
    }
    return (
      <div className='nav' id='nav'>
        <img src={logo} alt="" className='w'/>
        <div className="appname">Weather App</div>
        <img src={da} className='da' id='da' onClick={navHandle} alt="" />
        <div className="op">
            <a href="/">Home</a>
            <a href="/" className="x">About</a>
        </div>
      </div>
    )
  }
}
