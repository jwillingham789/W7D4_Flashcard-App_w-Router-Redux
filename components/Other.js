import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Tile from './Tile'

var Terms = (props) => (
  <div className="mdl-grid">
  <Tile path="/github" img="../img/github.png" topic="GitHub" />
  <Tile path="/babel" img="../img/babel.png" topic="Babel" />
  <Tile path="/node" img="../img/node.png" topic="Node" />
  <Tile path="/grunt" img="../img/grunt.png" topic="Grunt" />
  <Tile path="/gulp" img="../img/gulp.png" topic="Gulp" />
  <Tile path="/less" img="../img/less.jpeg" topic="Less" />
  <Tile path="/sass" img="../img/sass.png" topic="Sass" />
  </div>
)

export default Terms
