import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Tile from './Tile'

var Terms = (props) => (
  <div className="mdl-grid">
  <Tile path="/react" img="../img/react.png" topic="React" />
  <Tile path="/jquery" img="../img/jquery.png" topic="jQuery" />
  <Tile path="/backbone" img="../img/backbone.jpg" topic="Backbone" />
  </div>
)

export default Terms
