/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				cyan: {
					600: "#0891b2",
					700: "#0e7490",
				},
           green: {
          600: '#16a34a',
          700: '#15803d',
        },
				red: {
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					900: "#7f1d1d",
				},
			},
		},
	},
	plugins: [],
};
