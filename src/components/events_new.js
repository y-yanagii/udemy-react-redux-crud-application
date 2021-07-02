import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';

import { postEvent } from "../actions";

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
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

  // イベント情報登録処理を呼ぶ(非同期)
  async onSubmit(values) {
    await this.props.postEvent(values);
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

// dispatch
const mapDispatchToProps = ({ postEvent }); // dispatchの省略記法

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
