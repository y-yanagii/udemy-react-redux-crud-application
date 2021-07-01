import React, { Component } from "react";

// 関数コンポーネントの書き方
// function App() {
//   return ( <div><h1>Hello, world!</h1></div> );
// }

// クラスコンポーネントの書き方
class App extends Component {
  render() {
    // const greeting = "Hi, Tom!";
    // 文法上reactではクラス付与はclassNameとする。変数展開は{変数名}
    // キャメルケースで書くことclassName, onClick
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom;

    // Reactの制約として1つのタグでしか返せない（Vueのコンポーネント規約と同様）
    // vueでいうtemplateはReact.Fragment
    return (
      <React.Fragment>
        <label htmlFor="bar" onClick={() => {console.log("I am clicked.")}}>bar</label>
        <input type="text" onChange={() => {console.log("On Change !!")}} />
      </React.Fragment>
    )
  }
}

export default App;
