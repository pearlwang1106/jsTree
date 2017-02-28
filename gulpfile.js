/**
 * Created by Lee on 2017/02/27.
 */
var gulp = require('gulp')
var cache = require('gulp-cache')
var clean = require('gulp-clean')
var concat = require('gulp-concat')
var cssmin = require('gulp-cssmin')
var htmlmin = require('gulp-htmlmin')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var browserSync = require('browser-sync').create()

gulp.task('clean', function () {
  gulp.src(['dist/img'], { read: false })
        .pipe(clean())
})
gulp.task('rev', ['cssmin'], function () {
  gulp.src(['src/index.html'])
        .pipe(gulp.dest('src/'))
})
gulp.task('cssmin', function () {
  gulp.src('src/css/*.css')
        .pipe(concat('index.css'))
        .pipe(cssmin())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
})
gulp.task('htmlmin', function () {
  var option = {
    removeComments: true,
    collapseWhitespace: true, // 压缩html
    collapseBooleanAttributes: true, // 省略布尔属性的值
    removeEmptyAttributes: true, // 删除属性值为空的属性
    minifyJS: true,
    minifyCSS: true
  }
  gulp.src('src/index.html')
        .pipe(htmlmin(option))
        .pipe(gulp.dest('dist'))
})
gulp.task('jsmin', function () {
  gulp.src(['src/js/*.js'])
        // .pipe(concat('index.js'))
        .pipe(uglify({
          mangle: true, // 是否修改变量名
          compress: true, // 是否完全压缩
          preserveComments: 'all'// 保留所有注释
        }))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js/'))
})
gulp.task('imgmin', function () {
  gulp.src('src/images/*.{png, jpg, gif, ico}')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'))
})
gulp.task('watch', function () {
  gulp.watch('src/css/*.css', ['cssmin'])
  gulp.watch('src/js/*.js', ['jsmin'])
  gulp.watch('src/images/*.{png, jpg, gif, ico}', ['imgmin'])
  gulp.watch('src/*.html', ['htmlmin'])
})
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: ['./src']
    },
    browser: 'chrome'
  })
})
gulp.task('copy', function () {
  gulp.src(['src/css/**', 'src/js/*.js'], { base: './src/'})
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['htmlmin', 'cssmin', 'jsmin'])
