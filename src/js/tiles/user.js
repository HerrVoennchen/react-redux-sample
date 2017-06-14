import { createTile } from 'redux-tiles';
import { sleep } from 'delounce';

// this tile is for pure data
// it only makes request
export const fetchData = createTile({
  type: ['api', 'users'],
  fn: ({ api }) =>
    api.get('http://jsonplaceholder.typicode.com/users')
       .then(response => response.data),
});

// in this tile we put our business logic – here it is delay
// and then request
export const fetchDataWithDelay = createTile({
  type: ['api', 'data'],
  fn: async ({ api, actions, dispatch, selectors, getState }) => {
    await sleep(3000);
    await dispatch(actions.api.users());
    // we awaited for result, so we can safely get data
    // (or error, but we will stay on happy scenario here)
    // also I get result by selector, so we don't depend
    // on the return from dispatch middleware
    const { data } = selectors.api.users(getState());
    return data;
  },
});

export default [fetchData, fetchDataWithDelay];
