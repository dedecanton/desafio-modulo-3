/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"

const URL = 'https://62224954666291106a22d82f.mockapi.io/todo'


export default function useApi ():any{

   const [data, setData] = useState<any[]>([])
   const [isLoading, setIsLoading] = useState(false);
   

   const fetchData = useCallback(async () => {
     setIsLoading(true)

     try{
       const response = await fetch(URL)
       if(!response.ok){
         throw new Error('Something went wrong!')
       }
      const data = await response.json() 

      const loadedTasks:any = []

      data.forEach((data:any) => loadedTasks.push(data))
      setData(loadedTasks)
     }catch(err){
       console.log(err)
     }
     setIsLoading(false)
   },[])

   useEffect(() => {
     fetchData()
   },[fetchData])


   const deleteData = (id:string) => {
     fetch(`https://62224954666291106a22d82f.mockapi.io/todo/${id}`, {method:'DELETE'})
   }

   

    return { data, loading: isLoading, deleteData, fetchData }

}