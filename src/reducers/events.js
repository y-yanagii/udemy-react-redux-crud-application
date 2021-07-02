import _ from 'lodash';
// actionで定義したtypeをimport
import { READ_EVENTS } from "../actions";

// stateは値を持っていないためこの時点でinitialStateを渡す
const switchEvents = (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // 'id'をkeyにオブジェクト化をロダッシュで行う
      return _.mapKeys(action.response.data, 'id')
    default:
      return state
  }
};

export default switchEvents;