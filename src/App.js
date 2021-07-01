// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

// クラスコンポーネントの書き方
// class App extends Component {
//   render() {
//     // const greeting = "Hi, Tom!";
//     // 文法上reactではクラス付与はclassNameとする。変数展開は{変数名}
//     // キャメルケースで書くことclassName, onClick
//     // const dom = <h1 className="foo">{greeting}</h1>
//     // return dom;

//     // Reactの制約として1つのタグでしか返せない（Vueのコンポーネント規約と同様）
//     // vueでいうtemplateはReact.Fragment
//     return (
//       <React.Fragment>
//         <label htmlFor="bar" onClick={() => {console.log("I am clicked.")}}>bar</label>
//         <input type="text" onChange={() => {console.log("On Change !!")}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネントの書き方
const App = () => {
  // ユーザ情報
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 },
  ];

  return (
    <div>
      {
        profiles.map((profile, index) => {
          // propsにname、ageを渡す
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

// propsを受け取るコンポーネント
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

// default propsを指定propsに値がない場合設定する
// User.defaultProps = {
//   age: 1
// };

// propsの型を定義する(型通りじゃないとコンソールでWarningが出る)
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, // isRequiredは必須チェック
}

export default App;
