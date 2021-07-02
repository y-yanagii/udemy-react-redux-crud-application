import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    // コンポーネントのマウント時に実行される
    this.props.readEvents();
  }

  renderEvents() {
    // イベントリストをロダッシュのmapで回してbodyの中身を返す
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// vueでいうvuexだと思われ
const mapStateToProps = state => ({ events: state.events });
// dispatch
const mapDispatchToProps = ({ readEvents }); // dispatchの省略記法

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
