import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function IndividualAlbums(props) {
  const [image, setImage] = useState([])
  const [album, setAlbum] = useState([])
  const [albumgroup, setAlbumgroup] = useState([])
  const id = props.match.params.id

  
  useEffect(() => {
    axios.get("/albumnames/").then(outcome => {
      setAlbumgroup(outcome.data)
    })
  }, [])



  useEffect(() => {
    axios.get("/albumnames/" + id + "?_embed=images").then(outcome => {
      setImage(outcome.data.images)
      setAlbum(outcome.data)
    })
  }, [id])
  console.log("img object ---------> ",image)
  return (
    <div>

      <div>
      {albumgroup.map(album => (   
          <Link to={"/albumname/" + album.id} key={"link-" + id} className="albums">
            <img src={album.url} alt={album.name} className="album-cover"/>
            <p className="album-name" key={"albums-info-" + id + "?_embed=images"}>
            {album.name}
            </p>
          </Link>
      ))}
    </div>

    <Link to="/" key={"album-to-" + id}>&larr;</Link>
     <p>{album.name}</p>
      {image.map(item => (
        <>
          <img src={item.url} alt={item.name} key={"album-img-" + id}/>
        </>
      ))}
    </div>
  )
}

export default IndividualAlbums
