/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			textColor: {
				skin: {
					// Using modern `rgb`

					textLight: 'rgb(var(--text-light))',
					textDark: 'rgb(var(--text-dark))',
					navDark: 'rgb(var(--nav-light))',
					navLight: 'rgb(var(--nav-light))',
					name: 'rgb(var(--text-name))',
					date: 'rgb(var(--text-date))',
					description: 'rgb(var(--text-description))',
					readPost: 'rgb(var(--text-read))',
					title: 'rgb(var(--text-title))',
					textBody: 'rgb(var(--text-body))',
				},
			},
			backgroundColor: {
				skin: {
					bgLight: 'rgb(var(--bg-light))',
					bgDark: 'rgb(var(--bg-dark))',
					bgBtn: 'rgb(var(--bg-btn-pry))',
				},
			},
			borderColor: {
				skin: {
					bgBorder: 'rgb(var(--bg-border))',
					paginateBorder: 'rgb(var(--border-paginate))',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
