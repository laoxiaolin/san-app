var gulp     = require('gulp');
 
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify   = require('gulp-uglify');
var del      = require('del');
 
// 管理路径
var src_dir = './src',
    dst_dir = './dist';
var paths = {
  html:   src_dir + '/*.html',
  css:    src_dir + '/css/*.css',
  js:     src_dir + '*/js/*.js',
  images: src_dir + '*/img/**/*'
};

// 删除上一次压缩
gulp.task('clean', function () {
  del.sync(dst_dir)
});

gulp.task('css', ()=>{
  return gulp.src(paths.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest(dst_dir + '/css'))
})

gulp.task('systemjs', ()=>{
  return gulp.src(src_dir + '/*.js')
    .pipe(gulp.dest(dst_dir))
})

// 处理 HTML：直接拷贝到输出文件夹
gulp.task('html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(dst_dir))
});


// // 处理 APP-HTML：直接拷贝到输出文件夹
// gulp.task('app-html', function () {
//   return gulp.src(src_dir + '/app' + '/*.html')
//     .pipe(gulp.dest(dst_dir+ '/app'))
// });

gulp.task('default', ['clean', 'html', 'css', 'systemjs']);