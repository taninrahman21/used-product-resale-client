/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  //   daisyui:{
      
  //   themes: [
  //     {
  //       resaletheme:{
  //         primary: '#f2e1d9',
  //         secondary: '#fd8fd5f',
  //         accent: "#140C40",
  //         neutral: "#3D4451",
  //         "base-100": "#FFFFFF",
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
