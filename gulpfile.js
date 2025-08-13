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
  'js/layout.js',
  'js/cart.js',

  'js/homepage.js',
  'js/category.js',
  'js/product.js',
  'js/footer.js',
  'js/**/*.js'
];


function images() {
  return gulp.src([
    'images/**/*.{jpg,jpeg,png,gif,svg,webp}', // pouze obrázky
    '!images/**/._*' // ignorovat macOS metadata soubory
  ])
    .pipe(gulp.dest('output/images'));
}

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
  match: /<link class="dev_style".*?>/gi,
  replace: '<link class="dev_style" rel="stylesheet" href="/db-style.css">',
},


  {
    match: /<script\s+class="dev_script".*?<\/script>/gi,
    replace: '<script class="dev_script" src="/db-script.js"></script>',
  },
];

// BrowserSync proxy pro Shoptet - původní funkční konfigurace
function serve() {
  browserSync.init({
    watch: true,
    open: true,
    proxy: "https://www.standaklapuch.com",
    serveStatic: [path.join(__dirname, 'output')],
    rewriteRules: rewriteRules,
    port: 3022,
    notify: false
  });

  gulp.watch('css/**/*.scss', styles);
  gulp.watch('js/**/*.js', scripts);
}
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.serve = gulp.series(styles, scripts, images, serve);
exports.default = exports.serve;
exports.build = gulp.series(styles, scripts, images);