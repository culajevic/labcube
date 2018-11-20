const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const maps = require('gulp-sourcemaps');

// source and destination folders
const src = 'sandbox';
const dest = 'production';

// compile sass and create source map
gulp.task('sass', () =>
  gulp.src(['node_modules/bootstrap/scss/bootstrap.scss'  ,src+'/scss/*.scss'])
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(dest+'/css'))
);

// copy html and php files to production
gulp.task('copyFilesToProduction', () =>
    gulp.src([src+'/*.html',src+'/*.php'])
    .pipe(gulp.dest(dest))
);

// optimaze images
gulp.task('imageMin', () =>
    gulp.src(src+'/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(dest+'/images'))
);

// concatenate js files, minify them and create source map
gulp.task('concatenationJs', () =>
  gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', src+'/js/*.js'])
  .pipe(maps.init())
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(maps.write('./'))
  .pipe(gulp.dest(dest+'/js'))
);

gulp.task('default',['copyFilesToProduction', 'imageMin', 'sass', 'concatenationJs', 'watch']);

gulp.task('watch', () =>{
  gulp.watch(src+'/js/*.js', ['concatenationJs']);
  gulp.watch(src+'/images/*', ['imageMin']);
  gulp.watch(src+'/scss/*.scss', ['sass']);
  gulp.watch([src+'/*.html',src+'/*.php'], ['copyFilesToProduction']);
});
