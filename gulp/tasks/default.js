//  Import all Dependencies
import gulp from 'gulp';

// default tasks cleaning the  dist folder and then run the build task
gulp.task('default', ['clean'], () => {
	gulp.start('build');
});
