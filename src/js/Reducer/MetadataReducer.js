export default function metadataReducer(
	state = {
		isFetching: false,
		errorMessage: undefined,
		pendingRequests: 0
	},
	action
) {
	//console.log('action', action);
	//console.log('state', state);
	let { pendingRequests } = state;
	if (action.type.indexOf('START') > -1) {
		return { ...state, isFetching: true, pendingRequests: pendingRequests++ };
	} else if (action.type.indexOf('SUCCESS') > -1) {
		pendingRequests--;
		return { ...state, isFetching: pendingRequests === 0, pendingRequests: pendingRequests };
	}

	return state;
}
