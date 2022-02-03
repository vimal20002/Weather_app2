import React, { Component, useState } from 'react'
import Comp from './Comp'
import '../App.css'
import Time from './Time'
import temp from'../media/temp.png'
import sunrisei from'../media/sunrise.png'
import sunseti from '../media/sunset.png'
import Sunny from '../media/Sunny.png'
import Cloudy from '../media/Cloudy.png'
import Fog from '../media/Fog.png'
import Rainy from '../media/Rainy.png'
import Stromy from '../media/Stromy.png'
import Windy from '../media/Windy.png'
import wind from '../media/wind.png'
import hi from '../media/humidity.png'
import vi from '../media/visiblity.png'
import p from '../media/pressure.png'
export default class Card extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    let {city,region,country,speed,direction,pressure,visiblity,humidity,sunrise,sunset,day,text,min,max}=this.props;
    console.log(day,min,max,text)
     let x=new Date()
     let dayn=["Sunday","Monday","Tuesday","Wednusday","Thursday","Friday","Saturday"]
     function img(text)
     { 
       if(text==="Sunny")
       return Sunny
       else if(text==="Windy")
       return Windy
       else if(text==="Stromy")
       return Stromy
       else if(text==="Rainy")
       return Rainy
       else if(text==="Cloudy")
       return Cloudy
       else if(text==="Fog")
       return Fog
     }
 

    return (
      
      <div>
          <div  className={day==="today"?"big":"small"}>
            
            <img src={temp} className='temp' alt="" />
            <Comp classs="min" p="Min" unit="ºC" imgg="" val={min}/>
            <Comp classs="max" p="Max" unit="ºC" imgg="" val={max}/>
            <Comp classs="text" p={text} unit="" imgg={img(text)} val=""/>
            <Comp classs="day" p={day} unit="" imgg="" val='' add=""/>

            <div className="adress">{city}({region})-{country}</div>
             {day==="today" &&<>
             <Time/>
               <Comp classs="sunrise" unit="" add="" imgg={sunrisei} val={sunrise} p="Sunrise" ic="sri" />
           
              <Comp classs="sunset" unit="" add="" imgg={sunseti} val={sunset} p="Sunrise" ic="ss"/>
              <div className="wind"><h3>Wind</h3>
              <img src={wind} alt="" />
              <Comp classs="sp" p="Speed" unit="km/h" val={speed}  />
              <Comp classs="directn" p="Direction" unit="º" val={direction}  />
              </div>
               <Comp classs="humidity" p="Humidity" unit="%" imgg={hi} val={humidity} add=""/>
               <Comp classs="visiblity" p="Visiblity" unit="knots" imgg={vi} val={visiblity} add=""/>
               <Comp classs="pressure" p="Pressure" unit="mPa" imgg={p} val={pressure} add=""/>
               </> }
          </div>
             
      </div>
      
    )
   
  }
}


