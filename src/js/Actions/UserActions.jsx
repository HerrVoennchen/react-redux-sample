import axios from 'axios';
import {
	REQUEST_DATA,
	RECEIVE_DATA,
	REQUEST_DATA_ERROR,
	DATA
} from '../Constants';

// nutzung von thunk middleware
export function fetchData() {
	return dispatch => {
		dispatch({
			type: REQUEST_DATA
		});

		setTimeout(() => {
			return axios
				.get('http://jsonplaceholder.typicode.com/users')
				.then(response => response.data)
				.then(json =>
					dispatch({
						type: RECEIVE_DATA,
						users: json
					})
				)
				.catch(error =>
					dispatch({
						type: REQUEST_DATA_ERROR,
						error
					})
				);
		}, 3000);
	};
}

// nutzung von promise-middleware
export function fetchData2() {
	return {
		type: DATA,
		payload: axios.get('http://jsonplaceholder.typicode.com/users')
	};
}

// kombination von thunk + promise
export function fetchData3() {
	return dispatch => {
		return dispatch({
			type: DATA,
			payload: new Promise((resolve, reject) => {
				setTimeout(() => {
					axios
						.get('http://jsonplaceholder.typicode.com/users')
						.then(response => resolve(response))
						.catch(error => reject(error));
				}, 3000);
			})
		});
	};
}
