/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';


const BASE_URL = 'https://62224954666291106a22d82f.mockapi.io/todo'

const useApi = ():any => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
  
    const fetchApi = () => {
      fetch(BASE_URL) 
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        setLoading(false)
        setData(json)
      })
    };
  
    useEffect(() => {
      fetchApi();
    }, []);
  
    return { loading, data }
  };
  
  export default useApi;