//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import browserSync from 'browser-sync';

// Constants
const reload = browserSync.reload;

gulp.task('serve', ['views', 'styles', 'images'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
    }
  });

  gulp.watch([
    'app/*.html',
    '.tmp/*.html',
    'app/**/*.js',
    'app/**/*',
    '.tmp/**/*'
  ]).on('change', reload);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(paths.source.css, ['styles']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});
