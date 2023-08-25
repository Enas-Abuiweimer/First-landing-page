const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');



function compileSass() {
  return gulp.src('./assets/scss/style.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/')) // 
    
}

function watch() {
  gulp.watch('./assets/scss/style.scss', compileSass);
}

exports.compileSass = compileSass;
exports.watch = watch;