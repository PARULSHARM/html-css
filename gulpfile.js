var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");

  gulp.task('hello',function(){
    console.log('hello mumma');
  });


  gulp.task('sass',function(){
    return gulp.src('scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.reload({
        stream: true
      }));
  });


  gulp.task('sync',function(){
    var files = [
      'index.html',
      'css/*.css',
      'scss/*.scss'
    ];
    browserSync.init(files, {
      server:{
        baseDir:'./'
      },
    });

  });


  gulp.task('watch', ['sync','sass'], function(){
    gulp.watch('scss/**/*.scss',['sass']);
  });


  gulp.task('useref',function(){
    return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('.*js',uglify()))
    .pipe(gulp.dest('dist'))
  });


