import _ from 'lodash';
// actionで定義したtypeをimport
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions";

// stateは値を持っていないためこの時点でinitialStateを渡す
const switchEvents = (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      // 'id'をkeyにオブジェクト化をロダッシュで行う
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // eventsリストから今回削除したイベントのIDでもって除外する
      delete events[action.id];
      return { ...events } // {...}で新しいメモリ空間上に更新後のイベントのオブジェクトを入れて返してくれる
    default:
      return events
  }
};

export default switchEvents;