import React from "react"
import "../styles/PhotoGallery.css"
import Card from "./Card"

function PhotoGallery(props) {
  return (
    <div className="grid">
      {props.data.map(object => (
        <Card
          key={"card-" + object.id}
          id={object.id}
          name={object.name}
          basePath={props.basePath}
          url={object.url}
        />
      ))}
    </div>
  )
}

export default PhotoGallery
