import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/Navigation.css"

function Navigation() {
  const [albumgroup, setAlbumgroup] = useState([])

  useEffect(() => {
    axios.get("/photoAlbums/").then(response => {
      setAlbumgroup(response.data)
    })
  }, [])

  return (
    <div className="nav">
      <ul className="navigation">
        {albumgroup.map(album => (
          <li className="nav-item" key={"nav-item-" + album.id}>
            <Link to={"/album/" + album.id}>{album.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
