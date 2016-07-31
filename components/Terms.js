import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Tile from './Tile'

var Terms = (props) => (
  <div className="mdl-grid">
      <Tile path="/github" img="../img/github.png" topic="GitHub" />
      <Tile path="/electron" img="../img/electron.png" topic="Electron" />
      <Tile path="/node" img="../img/node.png" topic="Node" />
      <Tile path="/react" img="../img/react.png" topic="React" />
      <Tile path="/meteor" img="../img/meteor.png" topic="Meteor" />
      <Tile path="/angular" img="../img/angular.png" topic="Angular" />
      <Tile path="/babel" img="../img/babel.png" topic="Babel" />
      <Tile path="/bootstrap" img="../img/bootstrap.png" topic="Bootstrap" />
      <Tile path="/ember" img="../img/ember.png" topic="Ember" />
      <Tile path="/grunt" img="../img/grunt.png" topic="Grunt" />
      <Tile path="/gulp" img="../img/gulp.png" topic="Gulp" />
      <Tile path="/jquery" img="../img/jquery.png" topic="jQuery" />
      <Tile path="/backbone" img="../img/backbone.jpg" topic="Backbone" />
      <Tile path="/feathers" img="../img/feathers.jpg" topic="Feathers" />
      <Tile path="/less" img="../img/less.jpeg" topic="Less" />
      <Tile path="/phonegap" img="../img/phonegap.png" topic="PhoneGap" />
      <Tile path="/sass" img="../img/sass.png" topic="Sass" />
      <Tile path="/express" img="../img/express.png" topic="Express" />
  </div>
)

export default Terms
