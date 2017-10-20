const hostname = window && window.location && window.location.hostname;
console.log(hostname);

export const API_ROOT = (() => {
	if (hostname === 'localhost') {
	  return 'http://localhost:3090/';
	} else {
	  return '/';
	}
})();
