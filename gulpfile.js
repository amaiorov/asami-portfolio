var gulp = require('gulp')
var responsive = require('gulp-responsive')

gulp.task('resize-images', function () {
  return gulp
    .src('src/assets/img/projects/**/*.jpg')
    .pipe(
      responsive({
        '**/*.jpg': [
          {
            width: '100%',
          },
          {
            width: 720,
            rename: {
              suffix: '-720'
            }
          },
          {
            width: 1200,
            rename: {
              suffix: '-1200'
            }
          },
          {
            width: 1920,
            rename: {
              suffix: '-1920'
            }
          }
        ]
      }, {
        errorOnEnlargement: false,
        withMetadata: false,
        skipOnEnlargement: false,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        errorOnUnusedImage: false
      })
    )
    .pipe(gulp.dest('dist/assets/img/projects/'))
})
