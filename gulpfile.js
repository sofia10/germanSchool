var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});
function runGulp(lang){
    gulp.task('dev--'+lang, ['browserSync', 'sass-'+lang], function() {
        gulp.watch('resources/assets/scss/**/*.scss', ['sass-'+lang]);
        gulp.watch('*.html', browserSync.reload);
        gulp.watch('public/assets/site/layout/js/**/*.js', browserSync.reload);
    });

    gulp.task('sass-'+lang, function() {
        return gulp.src('resources/assets/scss/layout.'+lang+'.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/assets/site/layout/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
    });
}



// Run gulp lang
runGulp('ge');
runGulp('de');

