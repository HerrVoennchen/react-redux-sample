import { combineReducers } from 'redux';
import MetadataReducer from './MetadataReducer';
import UserListReducer from './UserListReducer';

export default combineReducers({
	metadata: MetadataReducer,
	userList: UserListReducer
});
