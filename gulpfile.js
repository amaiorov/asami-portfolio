var gulp = require('gulp');
var del = require('del');
var responsive = require('gulp-responsive');

const responsiveOpts = [{
  '**/*.jpg': [
    {
      width: '100%',
    },
    {
      width: 480,
      rename: {
        suffix: '-480'
      }
    },
    {
      width: 768,
      rename: {
        suffix: '-768'
      }
    },
    {
      width: 1440,
      rename: {
        suffix: '-1440'
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
  withoutEnlargement: true,
  errorOnUnusedConfig: false,
  errorOnUnusedImage: false
}];

const resize = (path) => {
  return gulp
    .src(path)
    .pipe(responsive(...responsiveOpts))
    .pipe(gulp.dest((file) => {
      return file.base + '/resize';
    }));
}

gulp.task('watch', function () {
  const watcher = gulp.watch(['src/assets/img/projects/**/*.jpg', '!src/assets/img/projects/**/resize/*.jpg'], (cb) => {
    console.log('file changed');
    cb();
  })

  watcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed`);
    resize(path);
  });

  watcher.on('add', function(path, stats) {
    console.log(`File ${path} was added`);
    resize(path);
  });

  watcher.on('unlink', async function(path, stats) {
    console.log(`File ${path} was removed`);
    var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
    var path = path.substr(0, path.lastIndexOf('/'));
    console.log(path);
    console.log(filename);
    const deletePattern = path + '/resize/' + filename + '*.jpg';
    const deletedFiles = await del([deletePattern]);
    console.log('Files deleted:\n', deletedFiles.join('\n'));

    // del('./resize/' + filename + '*');
    // console.log(path.split('/')[path.length - 1] .split('.')[0]  );
  });

});

gulp.task('resize-images', function() {
  return gulp
    .src('src/assets/img/projects/**/*.jpg')
    .pipe(responsive(...responsiveOpts))
    .pipe(gulp.dest('dist/assets/img/projects/'))
});
