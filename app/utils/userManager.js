import { UserManager } from 'oidc-client';

const userManagerConfig = {
	authority: 'http://localhost:5000',
	client_id: 'jsClient',
	response_type: 'token id_token',
	scope: 'openid profile',
	redirect_uri: 'http://localhost:8080/callback',
	silent_redirect_uri: 'http://localhost:8080/silent_renew.html',
	automaticSilentRenew: true,
	filterProtocolClaims: true,
	loadUserInfo: true,
};

const userManager =  new UserManager(userManagerConfig);
export default userManager;