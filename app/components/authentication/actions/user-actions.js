export const types = {
	USER_EXPIRED: 'USER_EXPIRED',
	REDIRECT_SUCCESS: 'REDIRECT_SUCCESS',
	USER_LOADED: 'USER_LOADED',
	SILENT_RENEW_ERROR: 'SILENT_RENEW_ERROR',
	SESSION_TERMINATED: 'SESSION_TERMINATED',
	USER_EXPIRING: 'USER_EXPIRING',
	USER_FOUND: 'USER_FOUND',
	LOADING_USER: 'LOADING_USER',
	USER_SIGNED_OUT: 'USER_SIGNED_OUT'
};

export const userExpired = () => ({type: types.USER_EXPIRED});
export const redirectSuccess = user => ({type: types.REDIRECT_SUCCESS, user: user});
export const userFound = user => ({type: types.USER_FOUND, user: user});

export const silentRenewError = error => ({type: types.SILENT_RENEW_ERROR, user: error});
export const sessionTerminated = () => ({type: types.SESSION_TERMINATED});
export const userExpiring = () => ({type: types.USER_EXPIRING});

export const loadingUser = () => ({type: types.LOADING_USER});
export const userSignedOut = () => ({type: types.USER_SIGNED_OUT});