import React, { Component } from 'react'

export default class time extends Component {


  render(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
setInterval(() => {
    let hh=new Date().getHours()
    let mm=new Date().getMinutes()
  Array.from(document.getElementsByClassName('time')).forEach(element => {
    element.innerText=`${hh}:${mm<10?"0"+mm:mm}${hh>=12?"pm":"am"}`;
});
 }, 1000);

    return (
      <div className='time'>
          {h}:{m} {h>=12?"pm":"am"}
      </div>
    )
  }}

