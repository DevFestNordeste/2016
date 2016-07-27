//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();

gulp.task('images', () => {
	return gulp.src(paths.source.img)
		.pipe($.cache($.imagemin({
				progressive: true,
				interlaced: true,
				svgoPlugins: [{
					cleanupIDs: false
				}]
			})
		))
		.pipe(gulp.dest(paths.build.img));
});
