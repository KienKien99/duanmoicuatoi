var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('views', function buildHTML() {
	return gulp.src('src/templates/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('styles', function buildCSS() {
	return gulp.src('src/styles/*.sass')
		.pipe(sass({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/css'))
});
gulp.task('default', function () {
	gulp.start([
		'views',
		'styles'
	]);
});