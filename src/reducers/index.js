import { combineReducers } from "redux";
import count from './count.js';
// アプリケーション内全てのレデューサーを全て統括するファイル

// メインのコンパインレデューサに全て結合させる
export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz }) <-通常こう