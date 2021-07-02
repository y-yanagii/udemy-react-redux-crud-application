import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  constructor(props) {
    super(props)
    // 下の関数たちをコンストラクタでバインドする
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // titleとbodyの入力フォーム（inputタグ）を返す
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  // イベント情報削除処理を呼ぶ
  async onDeleteClick() {
    // クリックしたイベントのIDを取得
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  // イベント情報登録処理を呼ぶ(非同期)
  async onSubmit(values) {
    // await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {
    // pristineはボタンの活性非活性をバリデーションをみて判断してくれる
    // submittingはsubmitされたらtrueになりその他はfalseになるのでボタンの二重送信を防止させる
    const { handleSubmit, pristine, submitting } = this.props // redux-formでの話
    console.log(submitting);

    return (
      <form　onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

// バリデーションを行う関数
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

// dispatch(このコンポーネントにdeleteEventをバインド)
const mapDispatchToProps = ({ deleteEvent }); // dispatchの省略記法

export default connect(null, mapDispatchToProps) (
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)
