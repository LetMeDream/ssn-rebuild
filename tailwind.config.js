import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
            },
            colors:{
                'general-gray': '#f8f8f8',
                'muted': '#393f4699',
            },
            backgroundColor:{
                'clearBlue': 'rgb(248, 250, 252)',
            }
        },
    },

    plugins: [forms, require('daisyui')],

};
