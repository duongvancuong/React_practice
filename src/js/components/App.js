import React, { Component } from 'react';
// import 'whatwg-fetch';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content.js';

const data = require('../data.json');
const fetchEvents = () => Promise.resolve(data).then(json => json.slice(0,4))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {refreshing: false}
  }

  refresh() {
    this.setState({refreshing: true})
  }

  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    const {refreshing} = this.state
    return (
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header title="Github activity" />

          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents} />

          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      </div>
    );
  }
}

export default App;
