import { userExpired, userFound, silentRenewError, sessionTerminated, userExpiring, userSignedOut } from '../components/authentication/actions/user-actions';
import userManager from './user-manager';

export default function bootstrap(store) {
	userManager.events.addUserLoaded(user => {
		store.dispatch(userFound(user))
	});
	userManager.events.addSilentRenewError(err => {
		store.dispatch(silentRenewError(err))
	});
	userManager.events.addAccessTokenExpired(() => {
		store.dispatch(userExpired())
	});
	userManager.events.addAccessTokenExpiring(() => {
		store.dispatch(userExpiring())
	});
	userManager.events.addUserUnloaded(() => {
		store.dispatch(sessionTerminated())
	});
	userManager.events.addUserSignedOut(() => {
		store.dispatch(userSignedOut())
	});
};