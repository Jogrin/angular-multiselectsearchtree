var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
    return gulp.src(['**/multiselect-searchtree.html', '**/tree-item.html'])
        .pipe(templateCache('kjvelarde-multiselect-searchtree.tpl.js', {
            module: 'multiselect-searchtree'
        }))
        .pipe(gulp.dest('src'));
});