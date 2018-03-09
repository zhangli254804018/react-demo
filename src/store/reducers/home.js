import {
  HOME_INFO
} from '../mutation-types'

import initialState from '../state'

export const homeState = (state = initialState.home, action) => {
  switch (action.type) {
    case HOME_INFO:
      const data = action.subreddit.data;
      const city = state.city;
      let path = [];
      _.each(city, function (item) {
        let lib = {};
        const findLastIndexs = _.findLastIndex(data, function (items) {
          return _.toLower(items.city) === _.toLower(item.city)
        });
        if (findLastIndexs !== -1) {
          lib = _.extend({}, data[findLastIndexs] ,item );
          path.push(lib)
        }
      });
      return Object.assign({}, state, {
        city: !_.isEmpty(path)  ? path  : city
      })
    default:
      return state;
  }
}
