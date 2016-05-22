var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./sass/*.scss', [])
        .pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./public/css/main.css'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);