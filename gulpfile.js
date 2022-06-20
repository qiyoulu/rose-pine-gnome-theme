const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('sass/gnome-shell.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gnome-shell'))
});

gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass']);
});
