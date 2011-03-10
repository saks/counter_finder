const tabs            = require('tabs'),
  panels              = require('panel'),
	widgets             = require('widget'),
  data                = require('self').data,
	panelWidth          = 200,
	panelPaddingsHeight = 20,
	panelCounterHeight  = 32;

var currentCounters = {};

var panel = panels.Panel({
  contentURL        : data.url('panel/content.html'),
	contentScriptFile : data.url('panel/main.js'),
	onShow            : function(e) {
		this.resize( panelWidth, panelPaddingsHeight + Object.keys(currentCounters).length * panelCounterHeight )
	},
	onMessage         : function( data ) {
		tabs.open('http://' + data);
		this.hide();
	}
});


var widget = widgets.Widget({
	label             : 'Counter finder',
	contentURL        : data.url('widget/toolbar-button.png'),
	contentScriptWhen : 'ready',
	panel             : panel,
});


function updateState( counters ) {
	currentCounters = counters;
	var newHTML = [];

	/* for debug only
	console.log( 'found counters:' );
	for ( var key in counters )
		console.log( 'counter: ', key, ', info url: ', counters[ key ] );
	*/


	for ( var counterName in counters )
		newHTML.push( constructCounterNode( counterName, counters[ counterName ] ) );

	panel.postMessage( newHTML.join('') );
};


function constructCounterNode( counterName, url ) {
	return '<li data-counter-url="' + url + '" class="' + (null === url ? 'disabled ' : '') + 'counter"><span class="icon ' +
		counterName + '_logo" ></span><span class="name">' + counterName + '</span></li>'
}

exports.updateState = updateState;
exports.panel       = panel;
