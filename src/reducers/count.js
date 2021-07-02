// actionで定義したtypeをimport
import { INCREMENT, DECREMENT } from "../actions";

// state(count)の状態の初期値をオブジェクトとして定義
const initialState = { value: 0 }

// stateは値を持っていないためこの時点でinitialStateを渡す
const switchCount = (state = initialState, action) => {
  // 実際の処理(vueでいうミューテーション)
  // actionで定義したINCREMENT, DECREMENTがaction.typeで取得できる
  // action.typeが未定義だったり初回だったりするとundefinedが来るのでその場合はstateをreturnしてあげる
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
};

export default switchCount;