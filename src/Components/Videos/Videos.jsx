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
      <main className = "container flex flex--center">
        <article className = "card post">
          <h2 className = "post-card__title">{video.title}</h2>
          <p className = "text__card">{video.description}</p>
          <p className = "video__card">{video.link}</p>
        </article>
      </main>
    )
  }

  export default Video