/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import { ListItemType } from "../types/ListItem.type";

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

   const postData = (item: ListItemType) => {
     fetch('https://62224954666291106a22d82f.mockapi.io/todo/', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })
   }

   const putData = (item:ListItemType) => {
     fetch(`https://62224954666291106a22d82f.mockapi.io/todo/${item.id}`, {
       method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })

   }

   

    return { data, loading: isLoading, deleteData, postData, putData }

}