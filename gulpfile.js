'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './src/**/*.scss';
var SCSS_DEST = './src/Assets/css';


gulp.task('compile_css', function() {
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});

// Detect changes in css
gulp.task('watch_scss', function() {
    gulp.watch(SCSS_SRC, ['compile_css']);
});

gulp.task('default', ['watch_scss']);
