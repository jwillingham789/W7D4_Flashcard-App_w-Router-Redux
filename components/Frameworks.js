import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Tile from './Tile'

var Terms = (props) => (
  <div className="mdl-grid">
  <Tile path="/electron" img="../img/electron.png" topic="Electron" />
  <Tile path="/meteor" img="../img/meteor.png" topic="Meteor" />
  <Tile path="/angular" img="../img/angular.png" topic="Angular" />
  <Tile path="/bootstrap" img="../img/bootstrap.png" topic="Bootstrap" />
  <Tile path="/ember" img="../img/ember.png" topic="Ember" />
  <Tile path="/feathers" img="../img/feathers.jpg" topic="Feathers" />
  <Tile path="/phonegap" img="../img/phonegap.png" topic="PhoneGap" />
  <Tile path="/express" img="../img/express.png" topic="Express" />
  </div>
)

export default Terms
