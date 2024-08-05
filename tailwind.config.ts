import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container:{
				padding: '1 rem' 
			}
		}
	},

	plugins: []
} as Config;
