const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const header = require('gulp-header');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const path = require('path');

// Pořadí SCSS a JS souborů
const scssOrder = [
  'css/header.scss',
  'css/footer.scss',
  'css/**/*.scss'
];
const jsOrder = [
  'js/header.js',
  'js/**/*.js'
];

// Automatické vložení importu proměnných
//const variableImport = `@import "../defaults/variables";\n`;
const variableImport = `@import "../defaults/variables";\n@import "../defaults/mixins";\n`;

// Stylování: běžný + minifikovaný soubor
function styles() {
  return gulp.src(scssOrder)
    .pipe(header(variableImport))
    .pipe(concat('db-style.scss'))
    .pipe(sass({ outputStyle: 'expanded', includePaths: ['defaults', 'css'] }).on('error', sass.logError))
    .pipe(gulp.dest('output/')) // Vygeneruje db-style.css (neminifikovaný)
    .pipe(cleanCSS())
    .pipe(concat('db-style.min.css'))
    .pipe(gulp.dest('output/'))
    .pipe(browserSync.stream());
}

// Skripty: běžný + minifikovaný soubor
function scripts() {
  return gulp.src(jsOrder)
    .pipe(concat('db-script.js'))
    .pipe(gulp.dest('output/')) // Vygeneruje db-script.js (neminifikovaný)
    .pipe(uglify())
    .pipe(concat('db-script.min.js'))
    .pipe(gulp.dest('output/'))
    .pipe(browserSync.stream());
}

// Přepisování v proxy (Shoptet)
const rewriteRules = [
  {
    match: /(<!-- place head codes here -->)/g,
    replace: '$1<link class="dev_style" rel="stylesheet" href="/db-style.min.css">',
  },
  {
    match: /(<!-- place body codes here -->)/g,
    replace: '$1<script class="dev_script" src="/db-script.min.js"></script>',
  },
  {
    match: /<link class="custom_style" href="https:\/\/cdn\.myshoptet\.com.*>/gi,
    replace: '',
  },
  {
    match: /<script class="custom_script" src="https:\/\/cdn.myshoptet\.com.*><\/script>/gi,
    replace: '',
  },
];

// Serve s browserSync proxy
function serve() {
  browserSync.init({
    watch: true,
    open: true,
    proxy: "https://dev.davidboruvka.cz",
    serveStatic: [path.join(__dirname, 'output')],
    rewriteRules: rewriteRules,
    port: 3020,
    notify: false
  });

  gulp.watch('css/**/*.scss', styles);
  gulp.watch('js/**/*.js', scripts);
}

// Export hlavních tasků
exports.styles = styles;
exports.scripts = scripts;
exports.serve = gulp.series(styles, scripts, serve);
exports.default = exports.serve;