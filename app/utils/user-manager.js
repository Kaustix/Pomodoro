import { UserManager } from 'oidc-client';

import oidcSettings from './oidc-settings';

const userManager =  new UserManager(oidcSettings);
export default userManager;