var gulp = require('gulp');
var scss = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var compass = require('gulp-compass');

gulp.task('scss', function(){
  return gulp.src('scss/styles.scss')
    .pipe(scss()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});


gulp.task('hello', function() {
  console.log('Hello Zell');
});


gulp.task('compass', function() {
  gulp.src('scss/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('css/'));
});

// gulp.task('browserSync',function(){
//   browserSync.init({
//     server:{
//       baseDir:'./'
//     }
//   })
// })

gulp.task('jshint', function () {
    return gulp.src('js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);

gulp.task('styles',function(){
gulp.src(['css/styles.css'])
.pipe(browserSync.reload({
  stream:true
}))
})


gulp.task('default', ['compass'], function() {
   gulp.watch("scss/*.scss", ['compass']);
 // gulp.watch("css/*.css", ['styles']);
});
