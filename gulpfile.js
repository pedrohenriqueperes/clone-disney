const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist.css'));
}

// Define the 'styles' task
gulp.task('styles', styles);

// Define the 'watch' task
exports.watch = function() {
    // Use gulp.series to run the 'styles' task before watching
    gulp.watch('./src/styles/*.scss', gulp.parallel('styles'));
};
