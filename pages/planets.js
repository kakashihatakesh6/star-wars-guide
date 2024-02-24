import Pagination from '@/components/Pagination';
import PlanetList from '@/components/PlanetList'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Planets = () => {
  const [planetData, setplanetData] = useState();
  useEffect(() => {
    fetchPlanetData();
  }, [])

  const fetchPlanetData = async () => {
    try {
      const endpoint = 'https://swapi.dev/api/planets/?format=json&page=3';
      const res = await axios.get(endpoint);
      const data = res.data.results;
      setplanetData(data);
      console.log(data)
    } catch (error) {
      console.log("Some Error Occurred!")
    }
  }
  

  return (
    <div className='pt-20'>
      <PlanetList title='Planets' data={planetData} />
      <Pagination />
    </div>
  )
}

export default Planets