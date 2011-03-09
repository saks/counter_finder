const ID_RE = /AC_ID\s*=\s*(\d+)/;
const ID_RE1 = /lik\?id=(\d+)/;


function getState( options ) {

	var presents = (
		options.html.indexOf('Akavita counter start') != -1                ||
		options.html.indexOf('http://adlik.akavita.com/bin/lik?id=') != -1 ||
		options.html.indexOf('adlik.akavita.com/acode.js') != -1           ||
		options.html.indexOf('var AC_ID') != -1
	);

	if ( presents ) {
		var matched = ID_RE1.exec( options.html ), infoURL = null; //TODO: think about better infoURL

		if ( null != matched ) infoURL = 'stat.akavita.com/stat/stat.pl?id=' + matched[1] + '&lang=ru';
	}

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name     = 'akavita';
exports.getState = getState;

