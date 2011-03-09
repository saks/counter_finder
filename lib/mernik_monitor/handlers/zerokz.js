function getState( options ) {

	var presents = (
		options.html.indexOf('Start CountZero code') != -1 ||
		options.html.indexOf('zero.kz/c.php') != -1
	), infoURL = 'zero.kz/rating';

	return {
		presents: presents,
		infoURL : infoURL,//TODO: think about better info url
	}
};


exports.name     = 'zerokz';
exports.getState = getState;

