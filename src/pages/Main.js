import React, { useState, useEffect } from "react"
import axios from "axios"
import PageHeader from "../components/PageHeader"
import PhotoGallery from "../components/PhotoGallery"

function AllAlbums(props) {
  const [albumgroup, setAlbumgroup] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/photoAlbums/").then(response => {
      setAlbumgroup(response.data)
    })
  }, [id])

  return (
    <>
      <PageHeader headerType="main" pageTitle="My Albums" path="/" />
      <PhotoGallery data={albumgroup} basePath="/album" />
    </>
  )
}

export default AllAlbums
