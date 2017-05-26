import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import './scss/Timeline.scss';
import './scss/index.scss';
import './scss/clock.scss';
import './scss/image.scss';
import App from'./js/components/App.js';
import AppRoute from'./js/components/AppRoute.js';
import Clock from'./js/components/Clock.js';
import Gallery from'./js/components/Gallery.js';
import SideBar from'./js/components/SideBar.js';
import Header from'./js/components/Header.js';
// import Root from'./js/components/Root.js';

import reducer from './js/redux/reducers';
import {Provider} from 'react-redux';
import { BrowserRouter,Router, Route, Link, Switch, HashRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {watchLoadImages} from './js/redux/saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchLoadImages)


const Home = () => (
  <div>
    <h1>Welcome home</h1>
    <Link to='/timeline'>Go to about</Link><br />
    <Link to='/clock'>Go Clock</Link><br />
    <Link to='/gallery'>Gallery</Link>
  </div>)
const About = ({ value }) => (<div><h1>Timeline {value}</h1></div>)
const customHistory = createBrowserHistory()

// ReactDOM.render(
//   // Provider là helper của redux giúp truy cập store và các function của nó ở tất cả các Component con
//   <Provider store={store}>
//     <HashRouter>
//       <div>
//         <Route path="/timeline"
//           render={(renderProps) => (
//             <div>
//               <Link to='/timeline/value1'>Value1</Link>
//               <Link to='/timeline/value2'>value2</Link>
//               <App />
//               <Route
//                 path="/timeline/:value"
//                 render={(renderProps) => (
//                   <div>
//                     <About value={renderProps.match.params.value} />
//                     <Link to='/'>Go home</Link>
//                   </div>
//                 )} />
//             </div>
//           )} />
//         <Route path="/clock"
//           render={(renderProps) => (
//             <div>
//               <Clock />
//             </div>
//           )} />
//         <Route path="/gallery"
//           render={(renderProps) => (
//             <div>
//                <Gallery />
//             </div>
//             )} />
//         <Route exact path="/"
//           render={(renderProps) => (
//             <div>
//               Home is underneath me
//               <Home {...this.props} {...renderProps} />
//             </div>
//           )} />
//       </div>
//     </HashRouter>
//   </Provider>, document.getElementById('root'));
ReactDOM.render(
  // <Provider store={store}>
    // <HashRouter>
      <div className="page-container">
        <div className="left-content">
          <div>
              <Header />
          </div>
        </div>
      </div>
    // </HashRouter>
  // </Provider>
  , document.getElementById('root'));
