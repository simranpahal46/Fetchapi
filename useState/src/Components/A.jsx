import axios from 'axios'
import {useState} from 'react'

export default function a() {
 
    const [data,setdata]=useState([])
    const showdata=async()=>{
        try{
      
            const url='https://jsonplaceholder.typicode.com/users'
            const response= await axios.get(url)

            setdata(response.data.data)
        }
        catch(e){
            console.error(e.message)
        }
    }

    console.log(data)
  return (
    <div>
        <button >Click</button>
    </div>
  )
}
