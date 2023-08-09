import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				light:
					'linear-gradient(162deg,rgba(185, 238, 222, 1) 0%,rgba(135, 204, 185, 1) 65%,rgba(85, 157, 169, 1) 100%)',
				dark: 'linear-gradient(162deg, rgba(30,62,83,1) 0%, rgba(37,75,98,1) 39%, rgba(71,108,124,1) 84%)',
			},
		},
	},
	plugins: [],
};
export default config;

