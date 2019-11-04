import React from "react"
import { Link } from "react-router-dom"
import "../styles/Card.css"

function Card(props) {
  return (
    <Link
      to={props.basePath + "/" + props.id}
      key={"link-" + props.id}
      className="card"
    >
      <div className="card-image">
        <img src={props.url} alt={props.name} className="album-cover" />
        <p
          className="card-title"
          key={"albums-info-" + props.id + "?_embed=images"}
        >
          {props.name}
        </p>
      </div>
    </Link>
  )
}

export default Card
