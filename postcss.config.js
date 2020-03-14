const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['**/*.html'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};

// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// const atimport = require('postcss-import');
// const { dest, src, task } = require('gulp');
// const postcss = require('gulp-postcss');
// const purgecss = require('@fullhuman/postcss-purgecss');
// const tailwindcss = require('tailwindcss');

// const TAILWIND_CONFIG = './tailwind.config.js';
// const SOURCE_STYLESHEET = './src/css/style.css';
// const DESTINATION_STYLESHEET = './build/css/style.css';

// task('css', () =>
//   src(SOURCE_STYLESHEET)
//     .pipe(
//       postcss([
//         atimport(),
//         autoprefixer,
//         cssnano({
//           preset: 'default'
//         }),
//         tailwindcss(TAILWIND_CONFIG),
//         ...(process.env.NODE_ENV === 'production'
//           ? [
//               purgecss({
//                 content: ['**/*.html'],
//                 defaultExtractor: (content) =>
//                   content.match(/[\w-/:]+(?<!:)/g) || []
//               })
//             ]
//           : [])
//       ])
//     )
//     .pipe(dest(DESTINATION_STYLESHEET))
// );

// purgecss({
//   content: ["**/*.html"],
//   defaultExtractor: content =>
//     content.match(/[\w-/:]+(?<!:)/g) || []
// })
