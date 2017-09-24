
export default {
	// DETECT_DEVICE: ({ commit }) => {
	// 	let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	// 	let device = '';
	// 	if (isMobile) {
	// 		device = 'mobile';
	// 	} else {
	// 		device = 'desktop';
	// 	}
	// 	commit('SET_DEVICE', device);
	// },
	// DETECT_SIZE: ({ commit }) => {
	// 	let width = window.innerWidth;
	// 	let size = '';
	// 	switch (true) {
	// 		case width < 640:
	// 			size = 'small';
	// 		break;
	// 		case width >= 640 && width < 1080:
	// 			size = 'medium';
	// 		break;
	// 		case width >= 1080:
	// 			size = 'large';
	// 		break;
	// 	}
	// 	commit('SET_SIZE', size);
	// },
	// DETECT_TOOLBAR_TYPE: ({ commit, state }) => {
	// 	let toolbarType = '';
	// 	if (state.device == 'mobile') {
	// 		toolbarType = 'mobile';
	// 	} else if (state.device == 'desktop' && state.size == 'small') {
	// 		toolbarType = 'mobile';
	// 	} else {
	// 		toolbarType = 'desktop';
	// 	}
	// 	commit('SET_TOOLBAR_TYPE', toolbarType);
	// },
	// REFRESH_USER: ({ commit, state }) => {
	// 	state.processes.loadUser = true;
	// 	// Check user roles
	// 	Backendless.UserService.getUserRoles()
	// 	.then( arrayOfRoles => {
	// 		commit('SET_ROLES', arrayOfRoles);
	// 		// Only AuthenticatedUser can update userInfo
	// 		if (arrayOfRoles.indexOf('AuthenticatedUser') !== -1) {
	// 			Backendless.UserService.getCurrentUser().then((userObject) => {
	// 				if (userObject) {
	// 					userObject.username = userObject.username?userObject.username:userObject.name;
	// 					userObject.avatarUrl = userObject.avatarUrl?userObject.avatarUrl:'/assets/icon_account_white.png';
	// 					let user = new User(userObject);
	// 					localStorage['currentUser'] = JSON.stringify(user);
	// 					commit('SET_USER', user);
	// 					commit('SET_LOGIN_STATE', true)
	// 				} else {
	// 					localStorage['currentUser'] = '';
	// 					commit('SET_USER', null);
	// 					commit('SET_LOGIN_STATE', false);
	// 				}
	// 				state.processes.loadUser = false;
	// 			}).catch((error) => {
	// 				console.log('REFRESH_USER', error);
	// 				state.processes.loadUser = false;
	// 			});
	// 		} else {
	// 			// Force to logout
	// 			localStorage['currentUser'] = '';
	// 			commit('SET_USER', null);
	// 			commit('SET_LOGIN_STATE', false);
	// 			state.processes.loadUser = false;
	// 		}
	// 	})
	// 	.catch( error => {
	// 		console.error('REFRESH_USER getUserRoles' ,error);
	// 		state.processes.loadUser = false;
	// 	});
	// },
	// GET_CREDIT_CARD: ({ commit, state }) => {
	// 	state.processes.loadCard = true;
	// 	Backendless.CustomServices.invoke('PaymentService', 'getCard')
	// 	.then( creditCard => {
	// 		commit('SET_CREDIT_CARD', creditCard);
	// 		state.processes.loadCard = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('GET_CREDIT_CARD' ,error);
	// 		state.processes.loadCard = false;
	// 	});
	// },
	// REMOVE_CREDIT_CARD: ({ commit, state }) => {
	// 	state.processes.loadCard = true;
	// 	Backendless.CustomServices.invoke('PaymentService', 'removeCard')
	// 	.then( creditCard => {
	// 		commit('SET_CREDIT_CARD', null);
	// 		state.processes.loadCard = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('REMOVE_CREDIT_CARD' ,error);
	// 		state.processes.loadCard = false;
	// 	});
	// },
	// REFRESH_FILMS: ({ commit }) => {
	// 	let allFilms = [];
	// 	filmsCache.Films.forEach(film => {
	// 		let content = new Film(film);
	// 		allFilms.push(content);
	// 	});
	// 	commit('SET_FILMS', allFilms);
	// },
	// REFRESH_CREDITS: ({ commit }) => {
	// 	commit('SET_CREDITS', creditsCache.Credits);
	// },
	// SET_CURRENT_FILM: ({ commit, state }, filmNumber) => {
	// 	let content = null;
	// 	state.asyncData.films.forEach(film => {
	// 		if (filmNumber == film.filmNumber) {
	// 			content = film;
	// 		}
	// 	});
	// 	commit('SET_CURRENT_FILM', content);
	// },
	// CLEAR_CURRENT_FILM: ({ commit }) => {
	// 	let content = null;
	// 	commit('SET_CURRENT_FILM', content);
	// },
	// GET_HISTORIES: ({ commit, state }) => {
	// 	state.processes.loadHistory = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'getPlayList', {type:0})
	// 	.then( playlist => {
	// 		commit('SET_HISTORIES', playlist.films);
	// 		state.processes.loadHistory = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('GET_HISTORIES' ,error);
	// 		state.processes.loadHistory = false;
	// 	});
	// },
	// ADD_WATCH_HISTORY: ({ commit, state }, payload) => {
	// 	state.processes.loadHistory = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'addItem', {type:0, filmNumber:payload})
	// 	.then( playlist => {
	// 		commit('SET_HISTORIES', playlist.films);
	// 		state.processes.loadHistory = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('ADD_WATCH_HISTORY' ,error);
	// 		state.processes.loadHistory = false;
	// 	});
	// },
	// REMOVE_WATCH_HISTORY: ({ commit, state }, payload) => {
	// 	state.processes.loadHistory = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'removeItem', {type:0, filmNumber:payload})
	// 	.then( playlist => {
	// 		commit('SET_HISTORIES', playlist.films);
	// 		state.processes.loadHistory = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('REMOVE_WATCH_HISTORY' ,error);
	// 		state.processes.loadHistory = false;
	// 	});
	// },
	// GET_FAVORITES: ({ commit, state }) => {
	// 	state.processes.loadFavorite = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'getPlayList', {type:1})
	// 	.then( playlist => {
	// 		commit('SET_FAVORITES', playlist.films);
	// 		state.processes.loadFavorite = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('GET_FAVORITES' ,error);
	// 		state.processes.loadFavorite = false;
	// 	});
	// },
	// ADD_FAVORITE_FILM: ({ commit, state }, payload) => {
	// 	state.processes.loadFavorite = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'addItem', {type:1, filmNumber:payload})
	// 	.then( playlist => {
	// 		commit('SET_FAVORITES', playlist.films);
	// 		state.processes.loadFavorite = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('ADD_FAVORITE_FILM' ,error);
	// 		state.processes.loadFavorite = false;
	// 	});
	// },
	// REMOVE_FAVORITE_FILM: ({ commit, state }, payload) => {
	// 	state.processes.loadFavorite = true;
	// 	Backendless.CustomServices.invoke('PlaylistService', 'removeItem', {type:1, filmNumber:payload})
	// 	.then( playlist => {
	// 		commit('SET_FAVORITES', playlist.films);
	// 		state.processes.loadFavorite = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('REMOVE_FAVORITE_FILM' ,error);
	// 		state.processes.loadFavorite = false;
	// 	});
	// },
	// GET_PURCHASE_RECORDS: ({ commit, state }) => {
	// 	state.processes.loadPurchasetRecords = true;
    //     Backendless.CustomServices.invoke('PaymentService', 'getRecords')
    //     .then(data => {
    //         let tidyArray = [];
    //         let tidyObj = {};
    //         data.forEach(d => {
    //             tidyObj = {};
    //             switch(d.order) {
    //                 case '0':
    //                     tidyObj.name = "包月240";
    //                     break;
    //                 case '1':
    //                     tidyObj.name = "單片租借";
    //                     break;
    //             }
    //             tidyObj.payTime = d.created;
    //             tidyObj.expireTime = d.updated;
    //             tidyObj.price = 0;
    //             tidyObj.creditNum = 3248;
    //             tidyArray.push(tidyObj);
    //         })
	// 		commit('SET_PURCHASE_RECORDS', tidyArray);
	// 		state.processes.loadPurchasetRecords = false;
	// 	})
	// 	.catch(error => {
	// 		console.error('GET_PURCHASE_RECORDS' ,error);
	// 		state.processes.loadPurchasetRecords = false;
	// 	});
	// },
	// LIKE_FILM: ({ commit, state }, payload) => {
	// 	state.processes.loadLikes = true;
	// 	Backendless.CustomServices.invoke('SocialService', 'likeFilm', payload)
	// 	.then( UserLikes => {
	// 		state.currentFilm.totalLikes += 1;
	// 		state.currentFilm.isLike = true;
	// 		state.processes.loadLikes = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('LIKE_FILM' ,error);
	// 		state.processes.loadLikes = false;
	// 	});
	// },
	// UNLIKE_FILM: ({ commit, state }, payload) => {
	// 	state.processes.loadLikes = true;
	// 	Backendless.CustomServices.invoke('SocialService', 'unlikeFilm', payload)
	// 	.then( UserLikes => {
	// 		state.currentFilm.totalLikes -= 1;
	// 		state.currentFilm.isLike = false;
	// 		state.processes.loadLikes = false;
	// 	})
	// 	.catch( error => {
	// 		console.error('UNLIKE_FILM' ,error);
	// 		state.processes.loadLikes = false;
	// 	});
	// }
}
