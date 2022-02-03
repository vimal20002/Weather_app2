import React, { Component } from 'react'
import '../App.css';
import Card from './Card'
import Loader from './Loader';


export default class Carditem extends Component {
    constructor()
    {
        super()
        this.state={
            lat:null,
            lng:null
        }
    }
    
    // componentDidMount()
    // {
    //     fetch(`https://yahoo-weather5.p.rapidapi.com/weather?lat=${this.st}&long=${document.getElementById("lg").innerText}&format=json&u=c`, {
    //         "method": "GET",
    //         "headers": {
    //           "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    //           "x-rapidapi-key": "9079f6ddbemsha3fe70229d3f47cp108909jsn0077a9ddd1da"
    //         }
    //       }
    //      ).then((d)=>{
    //         let p=d.json()
    //         return p
    //      }).then(p=>{
    //        this.setState({f:p.forecasts,load:false})
    //      console.log(this.state.f)
    //      })
    // }
    componentDidMount()

    {

        console.log(this.state.lat)

    }
  render() {
    let {lt,lg}=this.props;
    this.setState({lat:lt,lng:lg})
    return (
      <>
       <div>
      

      
      
     
      
      <Card day="today" min="11.36" max="13.64" sunrise="7:14 am" sunset ="5:29pm" city ="Kanpur" region="UP" country="India" text="Sunny" speed="9.6" direction="248" humidity="85" visiblity="16.01" pressure="999"/>
          
           
         
          </div>
        
      </>)
    
  }
}
