/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'Title': '44px',
      },
      width: {
        '163': '163px',
        '367': '367px',
        '560': '560px',
        '1177': '1177px',
      },
      height: {
        '560': '560px',
      },
      translate: {
        '100': '28rem',
      }
    },
  },
  plugins: [],
};
