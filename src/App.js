import React, { useEffect, useState } from 'react';

import Info from './components/Info/index';
import Input from './components/Input/index';
import Map from './components/Map/index'

import './styles';
import { Header, Title } from './styles';

import services from './services/services'

function App() {

    const [Ip, setIp] = useState('')
    const [Location, setLocation] = useState('')
    const [Isp, setIsp] = useState('')
    const [Timezone, setTimezone] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    const [info, setInfo] = useState('')

    async function getInfoByIp(){
      const response = await services.getInfoByIp(info)
      setIp(response.data.ip)
      setLocation(response.data.location)
      setIsp(response.data.isp)
      setTimezone(response.data.location.timezone)
      setLat(response.data.location.lat)
      setLng(response.data.location.lng)
  }

  const [searchValue, setSearchValue] = useState('')

    const handleKeyDown = e => {
        if(e.key === 'Enter'){
            setSearchValue(e.target.value)
            setInfo(searchValue)
            e.target.value = ''
            setSearchValue('')
        }
      }

      const handleClick = () => {
          setInfo(searchValue)
          setSearchValue('')
      }

      const handleChange = e => setSearchValue(e.target.value)


  useEffect(() => {
        getInfoByIp(info)
//eslint-disable-next-line
  },[info])


  return (
    <div className="App">
      <Header>
        <Title>IP Adress Tracker</Title>
      </Header>

      <Info Ip={Ip} region={Location.region} country={Location.country} timezone={Timezone} Isp={Isp}></Info>

      <Input handleChange={handleChange} handleKeyDown={handleKeyDown} handleClick={handleClick}></Input>

      <Map position={[lat, lng]}/>

    </div>
  );
}

export default App;
