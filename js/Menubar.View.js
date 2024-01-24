import { UIPanel, UIRow } from './libs/ui.js';

function MenubarView( editor ) {

	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title fullscreen' );
	title.setTextContent( strings.getKey( 'menubar/view' ) );
	

	

	// Fullscreen

	title.onClick( function () {

		if ( document.fullscreenElement === null ) {
			title.setClass( 'title fullscreenexit' );
			document.documentElement.requestFullscreen();

		} else if ( document.exitFullscreen ) {
			title.setClass( 'title fullscreen' );
			document.exitFullscreen();

		}

		// Safari

		if ( document.webkitFullscreenElement === null ) {
			title.setClass( 'title fullscreenexit' );
			document.documentElement.webkitRequestFullscreen();

		} else if ( document.webkitExitFullscreen ) {
			title.setClass( 'title fullscreen' );
			document.webkitExitFullscreen();

		}

	} );
	

	container.add( title );

	return container;

}

export { MenubarView };
