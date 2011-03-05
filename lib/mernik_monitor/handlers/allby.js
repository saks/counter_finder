function getState( options ) {

	var presents = (
		options.html.indexOf('all.by/cgi-bin/rating.cgi?id=') != -1
	), infoURL = null;

	if ( presents ) {
		infoURL = 'http://all.by/cgi-bin/searchrc.cgi?query=' + options.host + '&source=inet&period=y';

		console.log( 'allby presents. infoURL: ' + infoURL );
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'allby';
exports.getState = getState;

