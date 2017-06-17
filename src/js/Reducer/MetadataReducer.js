export default function metadataReducer(
	state = {
		isFetching: false,
		errorMessage: undefined
	},
	action
) {
	console.log('action', action);
	console.log('state', state);
	if (action.type.indexOf('START') > -1) {
		return { ...state, isFetching: true };
	} else if (action.type.indexOf('SUCCESS') > -1) {
		return { ...state, isFetching: false };
	}

	return state;
}
