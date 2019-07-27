import { FETCH_USER } from '../actions/types';

// const INITIAL_STATE = {
// 	currentUser: {},
// 	isSignedIn: null,
// 	userId: null
// };

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
};
