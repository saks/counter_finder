const handlers = require('mernik_monitor/handlers').list;


var tabHandler = {
	parse: function( html ) {
		var result = {};

		handlers.forEach(function( handler ) {
			result[ handler.name ] = handler.getState( html );
		});

		return result
	},

	process: function( tab, callback ) {
		var handler = this;

		tab.attach({
			contentScript: 'postMessage( {html: window.document.documentElement.innerHTML, host: document.location.host} )',
			onMessage: function ( options ) {
				callback.call( handler, handler.parse( options ) )
			}
		});
	}
};




exports.instance = tabHandler;

