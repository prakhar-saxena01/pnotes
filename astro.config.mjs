import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.prakhar.pro',
	integrations: [
		starlight({
			title: 'Notes',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },			
			sidebar: [
				{
					label: 'Polity',
					autogenerate: { directory: 'polity' },
				},
				{
					label: 'Law',
					autogenerate: { directory: 'Law' },
				},
			],
		}),
	],
});
