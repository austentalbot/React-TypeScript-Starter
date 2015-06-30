var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('typescript', function () {
  var tsOut = gulp.src('src/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      module: 'commonjs'
    }));
  return tsOut.js.pipe(gulp.dest('build'));
});

gulp.task('default', ['typescript']);
