import React, { useEffect, useState } from 'react'
import axios from 'axios'

const APIKEY = '4af43ff807msh47350ddb389b13ep1a9199jsn7bb25ea0826c'

const NbaTeams = () => {
  const [nbaData, setNbaData] = useState([])


  // const options = {
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/seasons/',
  //   headers: {
  //     'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
  //     'x-rapidapi-key': '6068304551msha62bc8c175c4f24p15bb79jsnaba932fc7cd7'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });


  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('https://api-nba-v1.p.rapidapi.com/seasons/', {
  //       params: {
  //         'x-rapidapi-key': APIKEY
  //       }
  //     })
  //     // setNbaData()
  //   }

  //   getData()
  // }, [])


  return (
    <div className="ui container">
      NBA Teams {nbaData}
    </div>
  )
}

export default NbaTeams;