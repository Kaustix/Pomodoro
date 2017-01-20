import {types} from '../actions/user-actions';

const initialState = {
	user: null,
	isLoadingUser: false
};

export default function UserReducer(state = initialState, action) {
	switch (action.type) {
		case types.USER_EXPIRED:
		case types.SILENT_RENEW_ERROR:
			return {...state, isLoadingUser: false};
		case types.SESSION_TERMINATED:
		case types.USER_SIGNED_OUT:
			return {...state, user: null, isLoadingUser: false};
		case types.REDIRECT_SUCCESS:
		case types.USER_FOUND:
			return {...state, user: action.user, isLoadingUser: false};
		case types.LOADING_USER:
			return {...state, isLoadingUser: true};
		default:
			return state;
	}
}