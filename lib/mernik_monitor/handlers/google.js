function getState( options ) {

	var presents = (
		options.html.indexOf('google-analytics.com') != -1 ||
		options.html.indexOf('_gaq.push')            != -1
	), infoURL = null;

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name = 'google';
exports.getState = getState;

