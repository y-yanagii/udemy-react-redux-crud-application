import _ from 'lodash';
// actionで定義したtypeをimport
import { READ_EVENTS, DELETE_EVENT } from "../actions";

// stateは値を持っていないためこの時点でinitialStateを渡す
const switchEvents = (events = {}, action) => {
  switch (action.type) {
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