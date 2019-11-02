import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function AllAlbums(props) {
  const [albumgroup, setAlbumgroup] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/albumnames/").then(outcome => {
      setAlbumgroup(outcome.data)
    })
  }, [id])

  return (
    <div className="album-cards" >
      {albumgroup.map(album => (   
          <Link to={"/albumname/" + album.id} key={"link-" + id} className="albums">
            <img src={album.url} alt={album.name} className="album-cover"/>
            <p className="album-name" key={"albums-info-" + id + "?_embed=images"}>
            {album.name}
            </p>
          </Link>
      ))}
    </div>
  )
}

export default AllAlbums
