module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  
        'md': '768px',  // Large Screens
        'lg': '1024px', 
        'xl': '1280px', 
      },
    },
  },
  plugins: [],
};
