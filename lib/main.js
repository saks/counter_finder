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
 */


/**
 */

[ 'open', 'close', 'ready', 'activate' ].forEach(function( eventName ) {
	tabs.on( eventName, function( tab ) {
		if ( isActiveTab(tab) ) desideWhatToDo( tab, eventName );
	})
});


function desideWhatToDo( tab, eventName ) {
	//console.log('### desideWhatToDo url: ', tab.url, ' eventName: ', eventName );

	if ( 'ready' == eventName ) {
		if ( isHTTPTab( tab ) ) {
			tabHandler.process( tab, function( newState ) {
				monitorWidget.updateState( newState );
			});
		}	else monitorWidget.notHTTPTab();
	}	else if ( true ) {

	};
};


function isHTTPTab( tab ) {
	return 0 === tab.url.indexOf('http://')
}

function isActiveTab( tab ) {
	return tab === tabs.activeTab
}

/*
tabs.on( 'ready', function( tab ) {
	if ( tab === tabs.activeTab  ) { // process only current ready tab
		tabHandler.process( tab, function( newState ) {
			monitorWidget.updateState( newState );
		});
	};
});


tabs.on( 'activate', function( tab ) {
	if ( 0 === tab.url.indexOf('http://') ) { // process only http pages
		tabHandler.process( tab, function( newState ) {
			monitorWidget.updateState( newState );
		});
	}

});
*/
















console.log("The add-on is running.");

