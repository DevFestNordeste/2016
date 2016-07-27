//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import purify from 'gulp-purifycss';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('html', ['views','styles'], () => {

  const assets = $.useref({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src(['app/*.html', '.tmp/*.html', '!app/googleec2bef8a4c676860.html'])
    .pipe(assets)
    .pipe($.if('*.js', $.sourcemaps.init()))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.autoprefixer({
      browsers: ['last 2 version']
    })))
    .pipe($.if('*.css', purify([paths.source.js, 'app/site/index.html'])))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: false
    })))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});

gulp.task('views', () => {
  return gulp.src('app/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream: true}));
});
