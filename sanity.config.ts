import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioLogo from './components/StudioLogo';
import StudioNavbar from './components/StudioNavbar';
import { defaultDocumentNode } from './structure/structure';

export default defineConfig({
	basePath: '/studio',
	name: 'Ezzy_Blog',
	title: 'ezzy-blog',

	projectId: 'a891wky7',
	dataset: 'production',

	plugins: [
		deskTool({
			defaultDocumentNode: defaultDocumentNode,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: StudioLogo,
			navbar: StudioNavbar,
		},
	},
	theme: myTheme,
});
