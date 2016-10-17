'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

// browserify
import browserify from 'browserify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';

var reload = browserSync.reload;

//css
gulp.task('sass', () => {
  gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'sass task complete'}));
})

//html
gulp.task('html',() => {
   gulp.src('src/html/*.html')
   .pipe(gulp.dest('dist/html'))
   .pipe(notify({ message: 'html task complete' }));
});

gulp.task('babel',() => {
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'babel task complete' }));
})

gulp.task('js-watch', ['babel'], browserSync.reload);

// The static server
gulp.task('serve', ['html','sass','babel'], () => {
    browserSync.init({
        server: {
            baseDir: ['./dist']
        },
        port: 9998
    });

    gulp.watch("src/html/*.html").on('change', browserSync.reload);
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch("src/js/*.js", ['js-watch']);
});

// set browserify task
gulp.task('browserify',()=> {
        browserify({
            entries: ['src/js/main.js','src/js/foo.js'],
            debug: true,
        })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('bundle.js'))   //生成入口文件
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))      
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'browserify task complete' }));
})

gulp.task('default', ['html','sass','babel','serve','browserify','watch']);

gulp.task('watch', () => {
  gulp.watch('src/css/app.scss',['sass']);
  gulp.watch('src/app.js', ['babel']);
  gulp.watch('src/js/*.js', ['browserify']);
})
