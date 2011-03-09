const ID_RE = /rambler\.ru\/top100\.(cnt|jcn)\?(\d+)/;

function getState( options ) {

	var presents = (
		options.html.indexOf('rambler.ru/top100') != -1
	), infoURL = null;

	if ( presents ) {
		var matched = ID_RE.exec( options.html )

		if ( matched ) infoURL = 'top100.rambler.ru/resStats/' + matched[2]
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'rambler';
exports.getState = getState;

