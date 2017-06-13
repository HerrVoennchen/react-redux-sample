import { RECEIVE_DATA, DATA } from '../Constants';

export default function generalReducer(state = [], action) {
	switch (action.type) {
		case RECEIVE_DATA: {
			return action.users;
		}

		case DATA + '_FULFILLED': {
			return action.payload.data;
		}

		default: {
			return state;
		}
	}
}
