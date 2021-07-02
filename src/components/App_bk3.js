import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment> 
    )
  }
}

// vueでいうvuexだと思われ
const mapStateToProps = state => ({ value: state.count.value });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
const mapDispatchToProps = ({ increment, decrement }); // dispatchの省略記法

export default connect(mapStateToProps, mapDispatchToProps)(App)
