const panelWidth      = 200,
	panelPaddingsHeight = 25,
	panelCounterHeight  = 32;


const actions = {
	updateCountersHTML: function( html ) {
		getCountersContentContainer().innerHTML = html;
	},
	updateSize: function() {
		updateSize();
	}
};

function updateSize() {
	var countersNumber = getCountersContentContainer().querySelectorAll('li.counter').length;
	postMessage([ 'resize', [ panelWidth, panelPaddingsHeight + (countersNumber * panelCounterHeight) ] ])
}

function getCountersContentContainer() {
	return document.getElementById('counter_finder_counters_list')
}

self.on( 'message', function( args ) {
	var actionName = args[0], data = args[1];

	//console.log('message from panel. actionName: ', actionName, ' , data: ', data);
	actions[ actionName ]( data )
});

window.addEventListener('click', function(event) {
	var counterNode = 'LI' == event.originalTarget.tagName ? event.originalTarget : event.originalTarget.parentNode,
	url = counterNode.getAttribute('data-counter-url');

	if ( 'LI' !=	counterNode.tagName || 'null' == String(url) ) return

	postMessage( counterNode.getAttribute('data-counter-url') );
}, false);

