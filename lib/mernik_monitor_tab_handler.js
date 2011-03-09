const handlers = require('mernik_monitor/handlers').list;
const data     = require('self').data;


function parse( html ) {
	var result = {}, state;

	handlers.forEach(function( handler ) {
		state = handler.getState( html );
		if ( state.presents ) result[ handler.name ] = state.infoURL;
	});

	return result
}

function process( tab, callback ) {
	if ( 0 === tab.url.indexOf('http://') ) { // process only http pages

		tab.attach({
			contentScriptWhen: 'ready',
			contentScriptFile: data.url('tab_handler.js'),
			onMessage        : function ( options ) {
				callback.call( this, parse( options ) )
			}
		});
	}
}


exports.process = process;

