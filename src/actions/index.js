import axios from "axios"; // 外部APIにアクセスするため

// actionsはtypeを持つオブジェクト
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// イベント情報全件取得(APIサーバよりaxiosで取ってくる)
export const readEvents = () => async dispatch => {
  // axiosでapi通信(axiosは非同期のためPromiseが返ってくる。よって関数自体async awaitを使ってresponseを受け取る)
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`); // イベントリストが返ってくる
  dispatch({ type: 'READ_EVENTS', response });
};

// イベント情報を登録(APIサーバよりaxiosでPOST送信)
export const postEvent = values => async dispatch => {
  // axiosでapi通信(axiosは非同期のためPromiseが返ってくる。よって関数自体async awaitを使ってresponseを受け取る)
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values); // イベントリストが返ってくる
  dispatch({ type: 'CREATE_EVENT', response });
};

// イベント情報を更新
export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
  dispatch({ type: UPDATE_EVENT, response })
}

// イベント情報１件取得
export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: 'READ_EVENT', response });
}

// イベント情報を削除(APIサーバよりaxiosでDELETE送信)
export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: 'DELETE_EVENT', id });
};
