import './App.css'

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Carditem from './components/Carditem'

const App = () => {
  const [loc, setLoc] = useState({})

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((success) => {
      setLoc({ lat: success.coords.latitude, long: success.coords.longitude })
    })
  }, [])

  return (
    <>
      <Navbar />
      <Carditem lt={loc.lat} lg={loc.long} />
    </>
  )
}

export default App
