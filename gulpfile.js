const gulp = require("gulp");
const themeKit = require("@shopify/themekit");
const sass = require("gulp-sass");
// const clean = require();

gulp.task("sass", () => {
  return gulp
    .src("styles/theme.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets"));
});

gulp.task("watch", () => {
  gulp.watch("styles/**/*.scss", gulp.series("sass"));
  themeKit.command("watch", { allowLive: true }, { env: "development" });
});
