var gulp     = require('gulp');
var bs     = require('browser-sync').create();
var ts     = require('gulp-typescript');
var pug    = require('gulp-pug');



var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify   = require('gulp-uglify');
var del      = require('del');

var reload      = bs.reload;
var tsProject   = ts.createProject('./src/tsconfig.json')
 
// 管理路径
var src_dir = './src',
    dst_dir = './dist';
var paths = {
  html:   src_dir + '/**/*.{html,htm}',
  css:    src_dir + '/**/*.css',
  js:     src_dir + '/**/*.js',
  ts:     src_dir + '/**/*.ts',
  pug:    src_dir + '/**/*.pug',
  images: src_dir + '/img/**/*'
};

// 启动Borwser-sync
gulp.task('browsersync', ['typescript'], ()=>{
  bs.init({
    ui: {
      port: 82
    },
    // 
    port: 81,
    // 
    server: {
      baseDir: [src_dir, dst_dir],
      directory: true,
      index: "index.html",
      routes: {
        "/node_modules": "node_modules",
        "/bower_components": "bower_components"
      }
    },
    // 
    logLevel: "debug",
    //
    open: false
  
  })

  gulp.watch(paths.ts, ['typescript']);
  gulp.watch(paths.pug, ['pug-watch']);
  gulp.watch("./dist/**/*.{html,htm,css,js}").on('change', reload);
  
})

// 编译pug文件
gulp.task('pug', ()=>{
    var YOUR_LOCALS = {
        "message": "This app is powered by gulp.pug recipe for BrowserSync"
    };

    return gulp.src(paths.pug)
        .pipe(pug({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest(dst_dir));
})

// *重要！
// *单独的任务为`.pug`文件
gulp.task('pug-watch', ['pug'], reload);


// 编译TypeScript,需要先编译pug文件
gulp.task('typescript', ['pug'], ()=>{
  let tsResult =  gulp.src(paths.ts)
    .pipe(tsProject())

  return tsResult.js
    .pipe(gulp.dest('dist'))
})

// 删除上一次压缩
gulp.task('clean', function () {
  del.sync(dst_dir)
});

// 压缩css
gulp.task('css', ()=>{
  return gulp.src(paths.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest(dst_dir))
})


// 拷贝systemjs配置文件
gulp.task('systemjs', ()=>{
  return gulp.src(paths.js)
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

gulp.task('default', ['clean', 'browsersync']);