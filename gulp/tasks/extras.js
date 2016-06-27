//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';

gulp.task('extras', () => {
  return gulp.src(['app/*.*', '!app/*.html', ], {
      dot: true
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Copy and paste taks


gulp.task('copy', ['copy-font', 'copy-cssIcons', 'copy-googleCode', 'copy-favico']);

gulp.task('copy-font', () => {
  return gulp.src('app/css/fonts/**/*')
    .pipe(gulp.dest('dist/css/fonts'))
})

gulp.task('copy-cssIcons', () => {
  return gulp.src('app/css/rapid-icons.css')
    .pipe(gulp.dest('dist/css'))
})

gulp.task('copy-googleCode', () => {
  return gulp.src('app/googleec2bef8a4c676860.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-favico', () => {
  return gulp.src('app/favicon.ico')
    .pipe(gulp.dest('dist'))
})
