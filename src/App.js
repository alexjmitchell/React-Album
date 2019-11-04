import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/base.css"

import Main from "./pages/Main"
import Album from "./pages/Album"
import Image from "./pages/Image"

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Main} />
        <Route path="/album/:id" component={Album} />
        <Route path="/image/:id" component={Image} />
      </div>
    </Router>
  )
}

export default App
