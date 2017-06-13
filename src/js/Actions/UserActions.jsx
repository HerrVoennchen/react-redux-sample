import { createTile, createSyncTile } from 'redux-tiles';
import axios from 'axios';

export const usersTile = createTile({
	type: ['users', 'listRequest'],
	fn: ({ params }) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				axios
					.get('http://jsonplaceholder.typicode.com/users')
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}, 3000);
		})
});

export default [usersTile];
