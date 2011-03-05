const handlers = require('mernik_monitor/handlers').list;
const data     = require('self').data;


function parse( html ) {
	var result = {};

	handlers.forEach(function( handler ) {
		result[ handler.name ] = handler.getState( html );
	});

	return result
}

function process( tab, callback ) {
	if ( 0 === tab.url.indexOf('http://') ) { // process only http pages
		console.log('########################## try to process. url: ', tab.url);

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

