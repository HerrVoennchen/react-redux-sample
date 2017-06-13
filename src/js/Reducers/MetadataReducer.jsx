import {
	REQUEST_DATA,
	RECEIVE_DATA,
	REQUEST_DATA_ERROR,
	DATA
} from '../Constants';

export default function metadataReducer(
	state = {
		isFetching: false,
		disconnected: false,
		errorMessage: undefined
	},
	action
) {
	switch (action.type) {
		case REQUEST_DATA: {
			return { ...state, isFetching: true, disconnected: false };
		}
		case RECEIVE_DATA: {
			return { ...state, isFetching: false, disconnected: false };
		}
		case REQUEST_DATA_ERROR: {
			return {
				...state,
				error: action.error,
				isFetching: false,
				disconnected: true
			};
		}

		case DATA + '_PENDING': {
			return { ...state, isFetching: true, disconnected: false };
		}
		case DATA + '_FULFILLED': {
			return { ...state, isFetching: false, disconnected: false };
		}
		case DATA + '_REJECTED': {
			return {
				...state,
				error: action.error,
				isFetching: false,
				disconnected: true
			};
		}

		default: {
			return state;
		}
	}
}
