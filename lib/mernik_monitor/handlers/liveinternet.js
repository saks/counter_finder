function getState( options ) {

	var presents = (
		options.html.indexOf('LiveInternet counter') != -1 ||
		options.html.indexOf('http://www.liveinternet.ru/click') != -1
	), infoURL = 'http://www.liveinternet.ru/stat/' + options.host + '/index.html';

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name = 'liveinternet';
exports.getState = getState;

