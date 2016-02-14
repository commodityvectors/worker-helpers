(() => {
    'use strict';

    const gulp = require('gulp');
    const eslint = require('gulp-eslint');

    gulp.task('lint', () => {
        return gulp.watch('modules/**/*.js', (e) => {
            gulp.src(['modules/**/*.js', '!node_modules/**'])
                .pipe(eslint('./.eslintrc.json'))
                .pipe(eslint.format())
                .pipe(eslint.results((results) => {
                    // Called once for all ESLint results.
                    console.log('--------ESLINT REPORT--------');
                    console.log('Total Results: ' + results.length);
                    console.log('Total Warnings: ' + results.warningCount);
                    console.log('Total Errors: ' + results.errorCount);
                }));
        });
    });

    gulp.task('default', ['lint'], () => {});
})();
