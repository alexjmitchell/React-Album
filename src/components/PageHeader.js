import React from "react"
import { Link } from "react-router-dom"
import "../styles/PageHeader.css"

function PageHeader(props) {
  const showBackArrow = props.headerType !== "main"
  const backArrow = (
    <Link to={props.path} className="arrow">
      &larr;
    </Link>
  )

  return (
    <h1 className={props.headerType}>
      {showBackArrow ? backArrow : ""}
      {props.pageTitle}
    </h1>
  )
}

export default PageHeader
