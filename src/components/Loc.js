import React, { Component } from 'react'

export default class Loc extends Component{



    render()
    
    {
        
        return <><div id='lt'>{this.state.latitude}</div>
        <div id='lg'>{this.state.longitude}</div>
        </> 
    }
}