/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",

        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
       extend : {
           colors: {
               'black': "#0A0A0A",
               'yellow': "#FFC326",
               'violet': "#92408C",
               'yellowLight': "#FFF6E0",
               'violetLight': "#FBE0FF"
           },
       }


    },
    plugins: [],
};


