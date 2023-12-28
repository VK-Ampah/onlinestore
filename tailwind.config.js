/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      backgroundImage: {
        'cloth': "url('https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'image2': "url('https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'image3': "url('https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
         screens: {
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
    },
    },
  },
  plugins: [],
}

