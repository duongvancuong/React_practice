import React from 'react';
import App from'./App.js';
import Clock from'./Clock.js';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const Home = () => (<div><h1>Welcome home</h1><Link to='/timeline'>Go to about</Link><Link to='/clock'>Go Clock</Link></div>)
const About = ({ value }) => (<div><h1>Timeline {value}</h1></div>)
const history = createHistory()

class AppRoute extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/timeline"
            render={(renderProps) => (
              <div>
                <Link to='/timeline/value1'>Value1</Link>
                <Link to='/timeline/value2'>value2</Link>
                <App />
                <Route
                  path="/timeline/:value"
                  render={(renderProps) => (
                    <div>
                      <About value={renderProps.match.params.value} />
                      <Link to='/'>Go home</Link>
                    </div>
                  )} />
              </div>
            )} />
          <Route path="/clock"
            render={(renderProps) => (
              <div>
                <Clock />
              </div>
            )} />
          <Route exact path="/"
            render={(renderProps) => (
              <div>
                Home is underneath me
                <Home {...this.props} {...renderProps} />
              </div>
            )} />
        </div>
      </Router>
    )
  }
}

export default AppRoute
