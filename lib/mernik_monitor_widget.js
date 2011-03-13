const tabs            = require('tabs'),
  panels              = require('panel'),
	widgets             = require('widget'),
  data                = require('self').data;

var panel = panels.Panel({
  contentURL        : data.url('panel/content.html'),
	contentScriptFile : data.url('panel/main.js'),
	onShow            : function() {
		this.postMessage([ 'updateSize' ])
	},
	onMessage         : function( args ) {
		var actionName = args[0], data = args[1];
		actions[ actionName ]( data );
	},
});


const actions = {
	resize: function( size ) {
		panel.resize( size[0], size[1] )
	},

	openNewTab: function( url ) {
		tabs.open('http://' + data);
		panel.hide();
	},
}


var widget = widgets.Widget({
	label             : 'Counter finder',
	contentURL        : data.url('widget/toolbar-button.png'),
	contentScriptWhen : 'ready',
	panel             : panel,
});


function notHTTPTab() {
	panel.postMessage([ 'updateCountersHTML', '<ul><li class="disabled counter"><span class="icon not_http_tab"></span><span class="name">not http page</span></li></ul>' ]);
}


function updateState( counters ) {
	var newHTML = ['<ul>'];

	/* for debug only
	console.log( 'found counters:' );
	for ( var key in counters )
		console.log( 'counter: ', key, ', info url: ', counters[ key ] );
	*/

	for ( var counterName in counters )
		newHTML.push( constructCounterNode( counterName, counters[ counterName ] ) );

	panel.postMessage( ['updateCountersHTML', newHTML.join('') + '</ul>'] );
};


function constructCounterNode( counterName, url ) {
	return '<li data-counter-url="' + url + '" class="' + (null === url ? 'disabled ' : '') + 'counter"><span class="icon ' +
		counterName + '_logo" ></span><span class="name">' + counterName + '</span></li>'
}

exports.updateState = updateState;
exports.notHTTPTab  = notHTTPTab;
exports.panel       = panel;
