import { userExpired, userFound, loadingUser } from '../components/authentication/actions/user-actions';
import co from 'co';

import userManager from './user-manager';

export let storedUser = null;

export function errorCallback(error) {
	console.error('Error in createOidcMiddleware', error);
}

export function* middlewareHandler(next, action) {
	console.log("called middleware");
	if (!storedUser || storedUser.expired) {
		next(loadingUser());
		let user = yield userManager.getUser();
		if (!user || user.expired) {
			next(userExpired());
		} else {
			storedUser = user;
			next(userFound(user));
		}
	}

	return next(action);
}

export default function createOidcMiddleware() {
	return (store) => (next) => (action) => {
		co(middlewareHandler(next, action)).catch(errorCallback);
	}
};