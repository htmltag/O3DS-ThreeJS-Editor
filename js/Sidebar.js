import { UITabbedPanel, UISpan } from './libs/ui.js';

import { SidebarProperties } from './Sidebar.Properties.js';
import { SidebarAnimation } from './Sidebar.Animation.js';

function Sidebar( editor ) {

	const strings = editor.strings;

	const container = new UITabbedPanel();
	container.setId( 'sidebar' );

	const details = new UISpan().add(
		new SidebarProperties( editor ),
		new SidebarAnimation( editor )
	);

	container.add(details);
	
	return container;

}

export { Sidebar };
