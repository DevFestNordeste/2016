//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import requireDir from 'require-dir';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages({branch: "master"}));
});
