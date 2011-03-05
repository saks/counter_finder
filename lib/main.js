const tabs          = require("tabs");
const monitorWidget = require("mernik_monitor_widget");
const tabHandler    = require("mernik_monitor_tab_handler").instance;


['ready', 'activate'].forEach(function( eventName ) {
	tabs.on( eventName, function( tab ) {
		tabHandler.process( tab, function( newState ) {
			monitorWidget.updateState( newState );
		});
	});
});


console.log("The add-on is running.");
