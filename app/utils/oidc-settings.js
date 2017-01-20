export default {
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