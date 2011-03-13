window.addEventListener('click', function(event) {
	var counterNode = 'LI' == event.originalTarget.tagName ? event.originalTarget : event.originalTarget.parentNode,
	url = counterNode.getAttribute('data-counter-url');

	if ( 'LI' !=	counterNode.tagName || 'null' == String(url) ) return

	postMessage( counterNode.getAttribute('data-counter-url') );
}, false);


const actions = {
	updateCountersHTML: function( html ) {
		document.getElementById('counter_finder_counters_list').innerHTML = html;
	},

};


self.on( 'message', function( args ) {
	var actionName = args[0], data = args[1];

	//console.log('message from panel. actionName: ', actionName, ' , data: ', data);
	actions[ actionName ]( data )
});

