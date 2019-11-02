import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AllAlbums from "./Main"
import SpecifiedAlbum from "./Album"
import "../styles/base.css"

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={AllAlbums} />
        <Route path="/Albumname/:id" component={SpecifiedAlbum} />
      </div>
    </Router>
  )
}

export default App
