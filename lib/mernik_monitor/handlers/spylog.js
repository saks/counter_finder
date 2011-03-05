const ID_RE = /spylog\.com\/cnt\?cid=(\d+)/;

function getState( options ) {

	var presents = (
		options.html.indexOf('spylog.com/cnt?cid') != -1
	), infoURL = null;

	if ( presents ) {
		var matched = ID_RE.exec( options.html )

		if ( matched ) infoURL = 'rating.openstat.ru/site/' + matched[1];

		console.log( 'spylog presents. infoURL: ' + infoURL );
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'spylog';
exports.getState = getState;

