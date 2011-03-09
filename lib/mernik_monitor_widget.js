const panels = require("panel");
const data   = require("self").data;

var panel = panels.Panel({
  contentURL        : data.url('panel/content.html'),
	contentScriptFile : data.url('panel/main.js'),
	onMessage         : function( data ) {
		console.log('message for panel: ', data)
	}
});


var updateState = function( newState ) {
	var newHTML = [];

	for ( var counterName in newState )
		if ( newState[ counterName ].presents ) newHTML.push( constructCounterNode(counterName, newState[ counterName ].infoURL) );

	panel.postMessage( newHTML.join('') );
};

function constructCounterNode( counterName, url ) {
	return '<li data-counter-url="' + url + '" class="' + (null === url ? 'disabled ' : '') + 'counter"><span class="icon ' +
		counterName + '_logo" ></span><span class="name">' + counterName + '</span></li>'
}

exports.updateState = updateState;
exports.panel       = panel;

