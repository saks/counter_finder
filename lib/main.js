const tabs          = require("tabs");
const data          = require("self").data;
const monitorWidget = require('mernik_monitor_widget');
const tabHandler    = require('mernik_monitor_tab_handler');


/**
 * states:
 *  - default
 *  - loading
 *  - found
 *  - not found
 *
div#counters {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 10px #000000;
  min-width: 120px;
  min-width: 50px;
}
 */


/**
 */




tabs.on( 'ready', function( tab ) {
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
