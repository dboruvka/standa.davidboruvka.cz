const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const path = require('path');

// Hlavní SCSS soubor!
const mainScss = 'css/main.scss';
const jsOrder = [
  'js/header.js',
  'js/**/*.js'
];

// Kompilace a minifikace SCSS (builduj JEN main.scss)
function styles() {
  return gulp.src(mainScss)
    .pipe(sass({ outputStyle: 'expanded', includePaths: ['css', 'defaults'] }).on('error', sass.logError))
    .pipe(concat('db-style.css'))
    .pipe(gulp.dest('output/')) // neminifikovaný
    .pipe(cleanCSS())
    .pipe(concat('db-style.min.css'))
    .pipe(gulp.dest('output/'))
    .pipe(browserSync.stream());
}

// Kompilace a minifikace JS
function scripts() {
  return gulp.src(jsOrder)
    .pipe(concat('db-script.js'))
    .pipe(gulp.dest('output/')) // neminifikovaný
    .pipe(uglify())
    .pipe(concat('db-script.min.js'))
    .pipe(gulp.dest('output/'))
    .pipe(browserSync.stream());
}

// Přepisování v proxy
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

// BrowserSync proxy pro Shoptet
function serve() {
  browserSync.init({
    watch: true,
    open: false,
    proxy: "https://dev.davidboruvka.cz",
    serveStatic: [path.join(__dirname, 'output')],
    rewriteRules: rewriteRules,
    port: 3020,
    notify: false
  });

  gulp.watch('css/**/*.scss', styles);
  gulp.watch('js/**/*.js', scripts);
}

// Hlavní tasky
exports.styles = styles;
exports.scripts = scripts;
exports.serve = gulp.series(styles, scripts, serve);
exports.default = exports.serve;