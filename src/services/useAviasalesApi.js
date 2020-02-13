import { useState, useEffect } from 'react';
import axios from 'axios';

const useAviasalesApi = () => {
  const [data, setData] = useState([])
  const [searchId, setSearchId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isStopped, setIsStopped] = useState(false)
  const [isError, setIsError] = useState(false)

  const BASE_URL = 'https://front-test.beta.aviasales.ru/'

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const resultSearchId = await axios(BASE_URL + 'search')
      const searchId = resultSearchId.data.searchId
      setSearchId(searchId)
      let data = []
      if (isStopped) {
        setData(data)
        setIsLoading(false)
      }

      while (!isStopped) {
        try {
          const resultTickets = await axios(BASE_URL + `tickets?searchId=${searchId}`)
          data = [...data, ...resultTickets.data.tickets]
          setData(data)
          setIsStopped(resultTickets.data.stop)
          if (resultTickets.data.stop) {
            setIsLoading(false)
            break
          }
        } catch (error) {
          setIsError(true)
        }
      }
    }

    fetchData()     
  }, []) 

  return [{ data, isLoading, isStopped }]
}

export default useAviasalesApi