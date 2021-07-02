import axios from "axios"; // 外部APIにアクセスするため

// actionsはtypeを持つオブジェクト
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const READ_EVENTS = 'READ_EVENTS'

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
