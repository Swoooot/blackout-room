'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['style'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("sass/**/*.scss", ['style']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('style', function() {
    gulp.src('sass/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

