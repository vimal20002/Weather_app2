import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from './Card'
import Loader from './Loader'

const Carditem = (props) => {
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    props.lt &&
      fetch(
        `https://yahoo-weather5.p.rapidapi.com/weather?lat=${props.lt}&long=${props.lg}&format=json&u=c`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
            'x-rapidapi-key':
              '9079f6ddbemsha3fe70229d3f47cp108909jsn0077a9ddd1da',
          },
        }
      )
        .then((d) => d.json())
        .then((p) => {
          setForecast(p.forecasts)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
  }, [props])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Card
            day={forecast[0].day}
            min="11.36"
            max="13.64"
            sunrise="7:14 am"
            sunset="5:29pm"
            city="Kanpur"
            region="UP"
            country="India"
            text="Sunny"
            speed="9.6"
            direction="248"
            humidity="85"
            visiblity="16.01"
            pressure="999"
          />
        </div>
      )}
    </>
  )
}

export default Carditem
