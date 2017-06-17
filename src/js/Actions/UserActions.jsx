import { createTile, createSyncTile } from 'redux-tiles';

export const usersTile = createTile({
	type: ['users', 'listRequest'],
	fn: ({ api }) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				api
					.get('http://jsonplaceholder.typicode.com/users')
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}, 3000);
		})
});

export default [usersTile];
