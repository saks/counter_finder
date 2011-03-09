function getState( options ) {

	var presents = (
		options.html.indexOf('mernik counter start') != -1 ||
		options.html.indexOf('countby.com/cnt?id')   != -1
	), infoURL = 'top.mernik.by'; //TODO: chose valid address dependent on region

	return {
		presents: presents,
		infoURL : infoURL,
	}
};


exports.name = 'mernik';
exports.getState = getState;
