var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src([
  	'./index.html',
  	'./game.js',
  	'./ball.js',
  	'./paddle.js',
  	'./brick.js',
  	'./assets/**/*.*'
  	])
    .pipe(ghPages());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('*.js').on('change', browserSync.reload);
});