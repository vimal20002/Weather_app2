import React, { Component } from 'react'
import vi from '../media/visiblity.png'

export default class Comp extends Component {
  render() {
    
   
      let {classs,imgg,p,unit,val,add,ic}=this.props;
      
    return (
      <div>
               <div className={classs}>
                 <p>{p}<br/>{add}{val}{unit}</p>
                 <img src={imgg} className ={ic} alt="" />
               </div>
      </div>
    )
  }
}
