import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  // コンポーネントの初期化時、コンストラクターメソッドが呼び出される
  constructor(props) {
    super(props) // 親クラスで初期化処理
    // stateにcountをセット
    this.state = { count: 0 }
  }

  // state.countに+1
  handlePlusButton = () => {
    // stateの中身を変更する場合setState(再レンダリングされる(下のrender(){}が呼ばれている))
    this.setState({ count: this.state.count + 1 });
  }

  // state.countを-1
  handleMinusButton= () => {
    // stateの中身を変更する場合setState(再レンダリングされる(下のrender(){}が呼ばれている))
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log("render");
    // console.log(this.state); // stateの初期値nullだがCounterクラスのコンストラクタで初期化しているため{count: 0}が入る
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment> 
    )
  }
}

export default App;