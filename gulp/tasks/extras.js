//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/**/*.html',
    '!app/**/*.jade'
   ], {
      dot: true
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Copy and paste taks


gulp.task('copy', ['copy-font', 'copy-cssIcons', 'copy-googleCode', 'copy-favico', 'copy-cname']);

gulp.task('copy-font', () => {
  return gulp.src('app/site/css/fonts/**/*')
    .pipe(gulp.dest('dist/css/fonts'))
})

gulp.task('copy-cssIcons', () => {
  return gulp.src('app/site/css/rapid-icons.css')
    .pipe(gulp.dest('dist/css'))
})

gulp.task('copy-googleCode', () => {
  return gulp.src('app/site/googleec2bef8a4c676860.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-favico', () => {
  return gulp.src('app/site/favicon.ico')
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-cname', () => {
  return gulp.src('app/site/CNAME')
    .pipe(gulp.dest('dist'))
})
