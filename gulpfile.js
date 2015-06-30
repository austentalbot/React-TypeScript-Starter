var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify'); 
var source = require('vinyl-source-stream');

gulp.task('typescript', function () {
  var tsOut = gulp.src('src/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      module: 'commonjs'
    }));
  return tsOut.js.pipe(gulp.dest('build'));
});

gulp.task('browserify', function() {
  return bundler = browserify({
    entries: ['./build/Widget.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/'));


  // var bundler = browserify({
  //   entries: ['./build/Widget.js'],
  //   debug: true,
  //   cache: {},
  //   packageCache: {},
  //   fullPaths: true
  // });
  // var watcher  = watchify(bundler);

  // return watcher
  // .on('update', function () { // When any files update
  //   var updateStart = Date.now();
  //   console.log('Updating!');
  //   watcher.bundle() // Create new bundle that uses the cache for high performance
  //   .pipe(source('bundle.js'))
  //   .pipe(gulp.dest('./build/'));
  //   console.log('Updated!', (Date.now() - updateStart) + 'ms');
  // })
  // .bundle() // Create the initial bundle when starting the task
  // .pipe(source('bundle.js'))
  // .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['typescript', 'browserify']);
