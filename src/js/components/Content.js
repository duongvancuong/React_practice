import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

const data = require('../data.json').slice(0,4)

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      activities: []
    }
  }

  componentDidMount() {
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData);
    }
  }

  updateData() {
    this.fetchData();
  }

  fetchData() {
    fetch('src/js/data.json')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          loading: false,
          activities: json
          }, this.props.onComponentRefresh);
      });
  }
  render() {
    const {loading, activities} = this.state;
    return (
      <div className="content">
        <div className="line"></div>
        {loading && <div>Loading</div>}

        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity} />
        ))}
      </div>
      )
  }
}

export default Content;
