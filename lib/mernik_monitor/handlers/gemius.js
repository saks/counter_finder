function getState( options ) {

	var presents = (
		options.html.indexOf('pp_gemius_identifier') != -1
	), infoURL = null;

	if ( presents ) {
		console.log( 'gemius presents. infoURL: ' + infoURL );
	};

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'gemius';
exports.getState = getState;

