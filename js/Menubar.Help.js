import { UIPanel, UIRow } from './libs/ui.js';

function MenubarHelp( editor ) {

	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu right' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/help' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Source code

	// About

	let option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/about' ) );
	option.onClick( function () {

		window.open( 'https://github.com/htmltag/O3DS-ThreeJS-Editor', '_blank' );

	} );
	options.add( option );

	return container;

}

export { MenubarHelp };
