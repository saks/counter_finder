var documentState = document.readyState;

console.log("\tdocument state is: ",documentState, 'url:', document.location );

if ( "complete" == documentState || "interactive" == documentState ) {
	postMessage( {html: window.document.documentElement.innerHTML, host: document.location.host} );
};
