const ID_RE = /mail\.ru\/counter\?id=(\d+)/;

function getState( options ) {

	var presents = (
		options.html.indexOf('mail.ru/counter?id=') != -1
	), infoURL = null;

	if ( presents ) {
		var matched = ID_RE.exec( options.html )

		if ( matched ) infoURL = 'top.mail.ru/rating?id=' + matched[1];
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'mailru';
exports.getState = getState;

