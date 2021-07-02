import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  constructor(props) {
    super(props)
    // 下の関数たちをコンストラクタでバインドする
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    // レンダリングが完了したらイベント情報を取得しに行く
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  // titleとbodyの入力フォーム（inputタグ）を返す
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   {touched && error && <span>{error}</span>}
      // </div>
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
    await this.props.putEvent(values);
    this.props.history.push('/');
  }

  render() {
    // pristineはボタンの活性非活性をバリデーションをみて判断してくれる
    // submittingはsubmitされたらtrueになりその他はfalseになるのでボタンの二重送信を防止させる
    // invalidは入力エラーがあるとfalseになる
    const { handleSubmit, pristine, submitting, invalid } = this.props // redux-formでの話

    const style = { margin: 12 }

    return (
      <form　onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        {/* <div>
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div> */}
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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}
// dispatch(このコンポーネントにdeleteEventをバインド)
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent }); // dispatchの省略記法

export default connect(mapStateToProps, mapDispatchToProps) (
  // Redux-formのenableReinitializeオプションtrueにすると上のinitialValuesの値が更新されるたびにformの中が初期化される
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
