var gulp = require('gulp');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  runSequence('inject', 'start-serve');
})

gulp.task('inject', function () {
  var target = gulp.src("src/index.html");
  var sourcesPath = [
    'https://maps.google.com/maps/api/js',
    'node_modules/angular/angular.min.js',
    'node_modules/ngmap/build/scripts/ng-map.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',

    'src/*.js',
    'src/app/*.js',
    'src/controller/*.js',
    'src/app/**/*.js',
    'src/app/components/**/**/*.js',

    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'src/app/components/**/style/*.css',
    'src/assets/css/*.css',
  ];

  var sources = gulp.src(sourcesPath, {
    read: false
  }, {
    relative: true
  });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('src'));
})

gulp.task('start-serve', function () {
  nodemon({
    script: 'serve.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  })
})