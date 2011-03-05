const ID_RE = /click\.hotlog\.ru\/\?(\d+)/;

function getState( options ) {

	var presents = (
		options.html.indexOf('click.hotlog.ru') != -1
	), infoURL = null;

	if ( presents ) {
		var matched = ID_RE.exec( options.html )

		if ( matched ) infoURL = 'hotlog.ru/viewstat?id=' + matched[1];

		console.log( 'hotlog presents. infoURL: ' + infoURL );
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'hotlog';
exports.getState = getState;

