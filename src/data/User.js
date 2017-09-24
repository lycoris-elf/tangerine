// User.js
// VER 0.1
// Conceived 3 Aug., 2017

export class User {
	objectId = '物件編號';
	username = '帳戶名稱';
	name = '使用者名稱';
	avatarUrl = '';
	facebookId = '';
	githubId = '';
	googleId = '';
	twitterId = '';
	email = '';
	birthday = '';
	mobileNumber = '';
	blog = '';
	gender = '';
	invoices = [];
	friends = [];
	userStatus = '';
	lastLogin = '';
	created = '';
	updated = '';
	lastLogin = '';

    constructor(userObject) {
        Object.assign(this, userObject);
    };
};
export default User;
