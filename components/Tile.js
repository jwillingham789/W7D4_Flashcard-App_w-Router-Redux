import React from 'react'
import { browserHistory } from 'react-router'

class Tile extends React.Component {
  render() {
    var tileImage = {
      backgroundImage: 'url(' + this.props.img + ')'
    }
    return (
        <div style={tileImage} onClick={() => browserHistory.push(this.props.path)} className="card-image mdl-cell mdl-cell--4-col">
            <div className="mdl-card__title mdl-card--expand"></div>
            <div className="mdl-card__actions">
                <span className="card-image__filename">{this.props.topic}</span>
            </div>
        </div>
      )
  }
}

export default Tile
