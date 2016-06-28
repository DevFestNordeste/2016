//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Styles task
gulp.task('styles', () => {
  return gulp.src([paths.source.css, '!app/css/rapid-icons.css'])
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: ['last 1 version']
    }))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});
