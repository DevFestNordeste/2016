//  Import all Dependencies
import gulp from 'gulp';
import minimist from 'minimist';
import { paths } from '../paths';
import requireDir from 'require-dir';
import gulpLoadPlugins from 'gulp-load-plugins';

// Sets the default arguments value
const commitMessage = {
  string: 'm',
  default: { m: process.env.NODE_ENV || 'Update at ' + new Date() }
};

// Get arguments from command line
const options = minimist(process.argv.slice(2), commitMessage);

// put all plugins in $ variable
const $ = gulpLoadPlugins();

gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages({
      branch: "master",
      message: options.m
    }));

});
