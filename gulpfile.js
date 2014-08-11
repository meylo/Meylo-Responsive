var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');
	
var coffeeSources = ['components/coffee/copyright.coffee'];	

var jsSources = [
	'components/scripts/meylo.js',
	'components/scripts/copyright.js',
	'components/scripts/ilightbox.packed.js',
	'components/scripts/jquery.mousewheel.js',
	'components/scripts/jquery.requestAnimationFrame.js'
];

var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))	
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded',
      require: [ 'susy', 'breakpoint' ]
      
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('default', ['coffee', 'js', 'compass', 'watch']);

