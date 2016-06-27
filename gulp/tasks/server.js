//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import browserSync from 'browser-sync';

// Constants
const reload = browserSync.reload;

gulp.task('serve', ['styles','images'], () => {
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
		'app/scripts/**/*.js',
		'app/images/**/*',
		'.tmp/fonts/**/*'
	]).on('change', reload);
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
