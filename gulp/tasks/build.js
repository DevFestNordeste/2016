//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();

// Build Using runSequence to Compose all taks
gulp.task('build', () => {
  runSequence(['html', 'images', 'extras', 'copy']);
  return gulp.src(paths.build.root)
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});
