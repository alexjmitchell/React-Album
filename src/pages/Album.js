import React, { useState, useEffect } from "react"
import axios from "axios"

import PageHeader from "../components/PageHeader"
import Navigation from "../components/Navigation"
import PhotoGallery from "../components/PhotoGallery"

function IndividualAlbums(props) {
  const [images, setImage] = useState([])
  const [album, setAlbum] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/photoAlbums/" + id + "?_embed=images").then(response => {
      setImage(response.data.images)
      setAlbum(response.data)
    })
  }, [id])

  return (
    <>
      <PageHeader headerType="album" pageTitle={album.name} path="/" />
      <div className="album-pagelayout">
        <Navigation />
        <PhotoGallery data={images} basePath="/image" />
      </div>
    </>
  )
}

export default IndividualAlbums
