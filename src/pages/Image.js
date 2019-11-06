import React, { useState, useEffect } from "react"
import axios from "axios"
import PageHeader from "../components/PageHeader"
import Carosel from "../components/Carosel"

function Image(props) {
  const fakedata = [
    {
      id: 0,
      url:
        "https://images.pexels.com/photos/2796145/pexels-photo-2796145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "hellyeah"
    },
    {
      id: 1,
      url:
        "https://images.pexels.com/photos/3095435/pexels-photo-3095435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "potato"
    }
  ]

  const id = props.match.params.id

  const [image, setImage] = useState([])

  useEffect(() => {
    axios.get("/images/" + id).then(response => {
      setImage(response.data)
    })
  }, [id])

  return (
    <>
      <PageHeader headerType="image" pageTitle={image.name} path="/" />
      <Carosel data={image} />
    </>
  )
}

export default Image
