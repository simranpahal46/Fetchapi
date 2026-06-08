import { useState ,useEffect} from 'react'
import axios from 'axios'

export default function Apis() {

    const [data, setdata] = useState([])

    const showdata = async () => {
        try {
            const url =`https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`
            const response = await axios.get(url)
            setdata(response?.data?.data?.data)
        }
        catch (e) {
            console.error(e.message)
        }
    }

    useEffect(()=>{
        showdata()
    },[])

    console.log(data)
    console.log(data[0]?.volumeInfo?.categories)


   return (
  <div className='flex flex-wrap'>
    {data.map((item) => (
           <div key={item.id}>
          <img src={item.volumeInfo?.imageLinks?.thumbnail} alt={item.volumeInfo?.title} />
          <h2>{item.volumeInfo?.title}</h2>

          <p>  Author:{item.volumeInfo?.authors}</p>

          <p>Category:{item.volumeInfo?.categories}</p>

        </div>
    ))}
  </div>

)
}
