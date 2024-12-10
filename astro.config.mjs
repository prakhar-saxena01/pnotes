import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Notes',
			sidebar: [
				{
					label: 'Polity',
					autogenerate: { directory: 'polity' },
				},
				{
					label: 'Governance',
					autogenerate: { directory: 'governance' },
				},
				{
					label: 'Internal Security',
					autogenerate: { directory: 'internal security' },
				},
				{
					label: 'International Relations',
					autogenerate: { directory: 'international relations' },
				},
				{
					label: 'Economy',
					autogenerate: { directory: 'economy' },
				},
				{
					label: 'Environment',
					autogenerate: { directory: 'environment' },
				},
				{
					label: 'Ancient History',
					autogenerate: { directory: 'ancient history' },
				},
				{
					label: 'Art and Culture',
					autogenerate: { directory: 'art and culture' },
				},
				{
					label: 'Medieval History',
					autogenerate: { directory: 'medieval history' },
				},
				{
					label: 'Modern History',
					autogenerate: { directory: 'modern history' },
				},
				{
					label: 'World History',
					autogenerate: { directory: 'world history' },
				},
				{
					label: 'Post Independence',
					autogenerate: { directory: 'post independence' },
				},
				
			],
		}),
	],
});
