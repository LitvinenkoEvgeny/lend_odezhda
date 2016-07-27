var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    path        = require('path'),
    browserSync = require('browser-sync'),
    through2    = require('through2'),
    reload      = browserSync.reload,
    browserify  = require('browserify'),
    del         = require('del'),
    argv        = require('yargs').argv,
    webpack     = require('webpack'),
    gutil       = require('gutil');

gulp.task('browser-sync', function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('compass', function() {
  return gulp.src('./src/stylesheets/**/*.{scss,sass}')
    .pipe($.plumber())
    .pipe($.compass({
      css: 'dist/stylesheets',
      sass: 'src/stylesheets',
      require: ['compass-normalize']
    }))
    .on('error', function (error) {
        console.log(error.stack);
        this.emit('end')
    })
    .pipe(gulp.dest('dist/stylesheets'));
});


// gulp.task('js', function() {
//   return gulp.src('src/scripts/*.js')
//     .pipe($.plumber())
//     .pipe(through2.obj(function (file, enc, next) {
//       browserify(file.path, { debug: true })
//         .transform(require('babelify'))
//         .transform(require('debowerify'))
//         .bundle(function (err, res) {
//           if (err) { return next(err); }
//           file.contents = res;
//             next(null, file);
//         });
//       }))
//       .on('error', function (error) {
//         console.log(error.stack);
//         this.emit('end')
//     })
//   .pipe( $.rename('app.js'))
//   .pipe( gulp.dest('dist/scripts/'));
// });

gulp.task("js", function(callback) {
    // run webpack
    webpack({
          entry: "./src/scripts/main.js",
          output: {
            filename: 'app.js',
            path: './dist/scripts'
          },
          plugins: [
            new webpack.ProvidePlugin({
              "$":"jquery",
              "jQuery":"jquery",
              "window.jQuery":"jquery"
            }),
          ],
          module: {
            loaders: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                  presets: ['es2015']
                }
              },
              { test: /\.css$/, loader: "style-loader!css-loader?root=." },
              { test: /\.gif$/, loader: "file-loader" },
            ]
          }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});


gulp.task('clean', function(cb) {
  del('./dist', cb);
});

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe($.imagemin({
      progressive: true
    }))
    .on('error', function (error) {
        console.log(error.stack);
        this.emit('end')
    })
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .on('error', function (error) {
        console.log(error.stack);
        this.emit('end')
    })
    .pipe( gulp.dest('dist/') )
});



gulp.task('build', ['compass', 'js', 'templates', 'images']);

gulp.task('serve', ['build', 'browser-sync'], function () {
  gulp.watch('src/stylesheets/**/*.{scss,sass}',['compass', reload]);
  gulp.watch('src/scripts/**/*.js',['js', reload]);
  gulp.watch('src/images/**/*',['images', reload]);
  gulp.watch('src/*.jade',['templates', reload]);
});

gulp.task('default', ['serve']);
