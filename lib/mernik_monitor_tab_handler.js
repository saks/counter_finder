const handlers = require('mernik_monitor/handlers').list;
const data     = require("self").data;


var tabHandler = {
	parse: function( html ) {
		var result = {};

		handlers.forEach(function( handler ) {
			result[ handler.name ] = handler.getState( html );
		});

		return result
	},

	process: function( tab, callback ) {
		if ( 0 === tab.url.indexOf('http://') ) { // process only http pages
			console.log("#############################################################");
			var handler = this;

			tab.attach({
				contentScriptWhen: 'ready',
				contentScriptFile: data.url('tab_handler.js'),
				onMessage        : function ( options ) {
					callback.call( handler, handler.parse( options ) )
				}
			});
		}
	}
};




exports.instance = tabHandler;

