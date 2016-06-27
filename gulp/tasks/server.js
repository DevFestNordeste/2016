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
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});

	gulp.watch([
		'app/*.html',
		'.tmp/*.html',
		'app/scripts/**/*.js',
		'app/images/**/*',
		'.tmp/fonts/**/*'
	]).on('change', reload);
	gulp.watch(paths.source.sass, ['styles']);
	gulp.watch(paths.source.fonts, ['fonts']);
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
