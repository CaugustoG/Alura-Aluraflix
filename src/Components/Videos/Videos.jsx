import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../../api/api"


   const Video = ({url}) => {
    const [video, setVideos] = useState({})

     const {id, category} = useParams() 
     console.log(id) 

     const navigate = useNavigate()

     useEffect (( )=>{
        buscar(`/videos/${id}`, setVideos).catch(()=>{
            navigate("/not-found")
        })
     }, [id])

    
    return(
      <main>
        <article>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <p className = "video__card">{video.link}</p>
        </article>
      </main>
    )
  }

  export default Video