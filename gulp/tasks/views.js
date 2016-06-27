//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import purify from 'gulp-purifycss';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('html', ['styles'], () => {

  const assets = $.useref({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src(['app/*.html', '.tmp/*.html', '!app/googleec2bef8a4c676860.html'])
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.autoprefixer()))
    .pipe($.if('*.css', purify([paths.source.js, 'app/index.html'])))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: false
    })))
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});
