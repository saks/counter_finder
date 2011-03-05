const tabs          = require("tabs");
const monitorWidget = require("mernik_monitor_widget");
const tabHandler    = require("mernik_monitor_tab_handler").instance;


tabs.on( 'ready', function( tab ) {
	if ( tab === tabs.activeTab ) {
	if ( tab === tabs.activeTab /* process only current ready tab */ ) {
		tabHandler.process( tab, function( newState ) {
			monitorWidget.updateState( newState );
		});
	};
});


tabs.on( 'activate', function( tab ) {
	tabHandler.process( tab, function( newState ) {
		monitorWidget.updateState( newState );
	});
});


console.log("The add-on is running.");
