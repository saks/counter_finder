window.addEventListener('click', function(event) {
	var counterNode = 'LI' == event.originalTarget.tagName ? event.originalTarget : event.originalTarget.parentNode,
	url = counterNode.getAttribute('data-counter-url');

	if ( 'LI' !=	counterNode.tagName || 'null' == String(url) ) return

	postMessage( counterNode.getAttribute('data-counter-url') );
}, false);

self.on( 'message', function( newHTML ) {
	//console.log('message from panel: ', newHTML);
	document.getElementById('counters').innerHTML = newHTML;
});

