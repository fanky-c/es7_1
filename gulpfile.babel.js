'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import clean from 'gulp-clean';

// browserify
import browserify from 'browserify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';

var reload = browserSync.reload;

//清除文件
gulp.task('clean', () => {
    gulp.src(['./dist'])
        .pipe(clean({force:true}))
        .pipe(notify({ message: 'clean task complete'}))
});


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

//images
gulp.task('images', () => {
    gulp.src(['src/images/*','src/images/**/*'])
    .pipe(imagemin({
       progressive: true,
       use: [pngquant()] //使用pngquant来压缩png图片
    }))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'images task complete'}))
});

//js
gulp.task('babel',() => {
  gulp.src('src/js/*.js')
    .pipe(babel())
    .on('error', function(err){
        console.log(err.stack);
        this.emit('end');
    })    
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'babel task complete' }));
})

gulp.task('js-watch', ['babel'], browserSync.reload);

// set browserify task
gulp.task('browserify',()=> {
        browserify({
            entries: ['src/js/main.js'],          
            // entries: ['src/js/main.js'
            //            ,'src/js/foo.js'
            //            ,'src/js/letAndConst.js'
            //            ,'src/js/string.js'
            //            ,'src/js/assignmentAndresolution.js'],
            debug: true
        })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('bundle.js'))   //生成入口文件
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: 'src'
        }))      
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'browserify task complete' }));
})


// The static server
gulp.task('serve', ['html','sass','images','babel'], () => {
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

gulp.task('default', ['html','sass','images','babel','serve','browserify','watch']);

gulp.task('watch', () => {
    gulp.watch("src/html/*.html",['html']); 
    gulp.watch('src/css/app.scss',['sass']);
    gulp.watch('src/images/*.{jpg,png,gif}',['images']);
    gulp.watch('src/app.js', ['babel']);
    gulp.watch('src/js/*.js', ['browserify']);
})
