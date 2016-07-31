import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../components/_ReduxStore'
import Terms from '../components/Terms'
import Term from '../components/Term'
import Tile from '../components/Tile'
import Libraries from '../components/Libraries'
import Frameworks from '../components/Frameworks'
import Other from '../components/Other'

const newBrowserHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={newBrowserHistory}>
      <Route path="/" component={Terms} />
      <Route path="/libraries" component={Libraries} />
      <Route path="/frameworks" component={Frameworks} />
      <Route path="/other" component={Other} />
      <Route path="/github" src="https://github.com/" component={Term} img="../screenshots/github.png" topic="GitHub" description="GitHub is a Web-based version-control and collaboration platform for software developers." />
      <Route path="/electron" src="http://electron.atom.io/" component={Term} img="../screenshots/electron.png" topic="Electron" description="Electron is an open-source framework developed by GitHub. It allows for the development of desktop GUI applications using the Node.js framework, originally used for the development of backend web applications" />
      <Route path="/node" src="https://nodejs.org/en/" component={Term} img="../screenshots/node.png" topic="Node" description="In software development, Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications. Although Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine." />
      <Route path="/react" src="https://facebook.github.io/react/" component={Term} img="../screenshots/react.png" topic="React" description="React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags." />
      <Route path="/meteor" src="https://www.meteor.com/" component={Term} img="../screenshots/meteor.png" topic="Meteor" description="Meteor is a free and open-source JavaScript web framework written using Node.js. Meteor allows for rapid prototyping and produces cross-platform (web, Android, iOS) code." />
      <Route path="/angular" src="https://angularjs.org/" component={Term} img="../screenshots/angular.png" topic="Angular" description="AngularJS is a complete JavaScript-based open-source client and server-side web application framework. The AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables." />
      <Route path="/ember" src="http://emberjs.com/" component={Term} img="../screenshots/ember.png" topic="Ember" description="Ember is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework." />
      <Route path="/phonegap" src="http://phonegap.com/" component={Term} img="../screenshots/phonegap.png" topic="PhoneGap" description="Apache Cordova (formerly PhoneGap) is a popular open source mobile application development framework. Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, orWindows Phone.  It enables wrapping up of CSS, HTML, and JavaScript code depending upon the platform of the device. It extends the features of HTML and JavaScript to work with the device." />
      <Route path="/express" src="https://expressjs.com/" component={Term} img="../screenshots/express.png" topic="Express" description="Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source softwareunder the MIT License. It is designed for building web applications and APIs. It is the de facto standard server framework for Node.js." />
      <Route path="/feathers" src="http://feathersjs.com/" component={Term} img="../screenshots/feathers.png" topic="Feathers" description="Feathers is a real-time, micro-service web framework for NodeJS that gives you control over your data via RESTful resources, sockets and flexible plug-ins." />
      <Route path="/bootstrap" src="http://getbootstrap.com/" component={Term} img="../screenshots/bootstrap.png" topic="Boostrap" description="Bootstrap is a free and open-source front-end web framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optionalJavaScript extensions." />
      <Route path="/jquery" src="https://jquery.com/" component={Term} img="../screenshots/jquery.png" topic="jQuery" description="jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. jQuery is free, open-source software licensed under the MIT License." />
      <Route path="/backbone" src="http://backbonejs.org/" component={Term} img="../screenshots/backbone.png" topic="Backbone" description="Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js, plus jQuery for use of the full library. It is designed for developing single-page web applications, and for keeping various parts of web applications (e.g. multiple clients and the server) synchronized." />
      <Route path="/grunt" src="http://gruntjs.com/" component={Term} img="../screenshots/grunt.png" topic="Grunt" description="Grunt is a task-based command line build tool for JavaScript projects. Here's the idea: when working on a JavaScript project, there are a bunch of things you'll want to do regularly. Like what, you ask? Well, like concatenating given files, running JSHint on your code, running tests, or minifying your scripts." />
      <Route path="/gulp" src="http://gulpjs.com/" component={Term} img="../screenshots/gulp.png" topic="Gulp" description="Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more. The kicker for gulp is that its a streaming build system which doesn't write temp files." />
      <Route path="/babel" src="https://babeljs.io/" component={Term} img="../screenshots/babel.png" topic="Babel" description="Babel is a transpiler for JavaScript best known for its ability to turn ES6 (the next version of JavaScript) into code that runs in your browser." />
      <Route path="/sass" src="http://sass-lang.com/" component={Term} img="../screenshots/sass.png" topic="Sass" description="Sass is a scripting language that is interpreted into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax', uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS, uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate lines within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively." />
      <Route path="/less" src="http://lesscss.org/" component={Term} img="../screenshots/less.png" topic="Less" description="Less (sometimes stylized as LESS) is a dynamic style sheet language that can be compiled into Cascading Style Sheets(CSS) and run on the client side or server side. Less is influenced by Sass and has influenced the newer 'SCSS' syntax of Sass, which adapted its CSS-like block formatting syntax." />
    </Router>
  </Provider>
, document.getElementById('app'))
