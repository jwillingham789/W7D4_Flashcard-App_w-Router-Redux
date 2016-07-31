import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Term extends Component {
  onClick() {
    // Redirect back to list route
  }
  render() {
    var backgroundImage = {
      backgroundImage: 'url(' + this.props.route.img + ')'
    }
    // Add description, and make this look way better
    // onClick redirect them to /
    return (
      <div className="card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title backgroundImagePage" style={backgroundImage} >
            <button onClick={() => browserHistory.push('/')} className="mdl-button buttonPosition mdl-js-button mdl-button--raised">Back</button>
          </div>
          <div className="mdl-card__supporting-text">
            <h2 className="mdl-card__title-text">{this.props.route.topic}</h2>
            {this.props.route.description}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a href={this.props.route.src} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Check It Out!
            </a>
          </div>
      </div>
  )
  }
}

const mapStateToProps = function(store) {
  return {
    // props go on left, state goes on right
    score: store.termState.score,
  }
}
export default connect(mapStateToProps)(Term)
