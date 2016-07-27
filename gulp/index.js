//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var tasks = requireDir('./tasks');
