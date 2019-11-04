import React, { useState, useEffect } from "react"
import "../styles/Carosel.css"

function Carosel(props) {
  return (
    <div className="carosel-container">
      <div className="left-arrow">&larr;</div>
      {/* {props.data.map(obj => (
        <img src={obj.url} alt={obj.name} key={"image-" + obj.id} />
      ))} */}
      <img src={props.data.url} alt={props.data.name}/>
      <div className="right-arrow" >
        &rarr;
      </div>
    </div>
  )
}

export default Carosel
