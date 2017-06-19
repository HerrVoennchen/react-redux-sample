import { createTile, createSyncTile } from 'redux-tiles';
import { sleep } from 'delounce';

export const usersTile = createTile({
	type: ['users', 'listRequest'],
	fn: ({ api }) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				api
					.get('http://jsonplaceholder.typicode.com/users')
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}, 3);
		})
});

export const fetchDataWithDelay = createTile({
	type: ['users', 'listRequest2'],
	fn: async ({ api, actions, dispatch, selectors, getState }) => {
		await sleep(3000);
		await dispatch(actions.users.listRequest());
		// we awaited for result, so we can safely get data
		// (or error, but we will stay on happy scenario here)
		// also I get result by selector, so we don't depend
		// on the return from dispatch middleware
		const { data } = selectors.users.listRequest(getState());
		return data;
	}
});

export default [usersTile, fetchDataWithDelay];
