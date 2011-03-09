const tabs   = require('tabs');
const panels = require('panel');
const data   = require('self').data;

var panel = panels.Panel({
  contentURL        : data.url('panel/content.html'),
	contentScriptFile : data.url('panel/main.js'),
	onMessage         : function( data ) {
		tabs.open('http://' + data);
		this.hide();
	}
});


var updateState = function( counters ) {
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

