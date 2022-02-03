import React, { Component } from 'react'
import l from "../media/loader2.gif"

export default class Loader extends Component {
  render() {
    return (
      <div className='load'>
        <img src={l} salt="loader" />
      </div>
    )
  }
}
