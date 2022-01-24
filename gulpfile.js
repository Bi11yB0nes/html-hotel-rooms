const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src(['styles/sass/**/*.sass', 'styles/sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('styles/css'))
});

gulp.task('watch', function() {
    gulp.watch(['styles/sass/**/*.sass', 'styles/sass/**/*.scss'], gulp.parallel('sass'));
});

gulp.task('default', gulp.series('watch'));