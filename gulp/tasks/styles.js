var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,cssvars,nestedcss,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});