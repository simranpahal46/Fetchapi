import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Api() {
    const [data,setdata]=useState([])

    const showdata=async()=>{
        try{
            const url=`https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`
            const response=await axios.get(url)
            setdata(response?.data?.data?.data)
        }
        catch(e){
            console.log(e.meassage)
        }
    }
    
     useEffect(()=>{
        showdata()
    },[])

    console.log(data)
  return (
    <div>Api</div>
  )
}
