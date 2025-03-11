// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync').create();
// const rename = require("gulp-rename");
// const autoprefixer = require('gulp-autoprefixer').default;
// const cleanCSS = require("gulp-clean-css");

// // Запускаем локальный сервер
// gulp.task('server', function () {
//     browserSync.init({
//         server: {
//             baseDir: "dist"
//         }
//     });
// });

// // Компиляция SCSS в CSS + минификация
// gulp.task('styles', function () {
//     return gulp.src("src/sass/**/*.+(scss|sass)")
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(rename({ suffix: ".min" }))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(gulp.dest("dist/css"))  // Кладём в dist/
//         .pipe(browserSync.stream());
// });

// // Копируем HTML в dist/
// gulp.task('html', function () {
//     return gulp.src("src/*.html")
//         .pipe(gulp.dest("dist/"))
//         .pipe(browserSync.stream());
// });

// // Копируем JS в dist/
// gulp.task('scripts', function () {
//     return gulp.src("src/js/**/*.js")
//         .pipe(gulp.dest("dist/js"))
//         .pipe(browserSync.stream());
// });

// // Копируем изображения
// gulp.task('images', function () {
//     return gulp.src("src/img/**/*")
//         .pipe(gulp.dest("dist/img"))
//         .pipe(browserSync.stream());
// });

// // Копируем шрифты
// gulp.task('fonts', function () {
//     return gulp.src("src/fonts/**/*")
//         .pipe(gulp.dest("dist/fonts"))
//         .pipe(browserSync.stream());
// });

// // Следим за изменениями и обновляем файлы
// gulp.task('watch', function () {
//     gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
//     gulp.watch("src/*.html", gulp.parallel('html'));
//     gulp.watch("src/js/**/*.js", gulp.parallel('scripts'));
//     gulp.watch("src/img/**/*", gulp.parallel('images'));
//     gulp.watch("src/fonts/**/*", gulp.parallel('fonts'));
// });

// // Запуск всех задач по умолчанию
// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'images', 'fonts'));

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function () {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));