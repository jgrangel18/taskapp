// module.exports = {
//   // ...
//   resolve: {
//     alias: {
//       //'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
//       vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
//     }
//   }
// }
let mix = require('laravel-mix');
mix.js('./js/app.js', '_build/bundle2.js');
