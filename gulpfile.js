const gulp = require("gulp");

gulp.task("copyBootstrap", () => {
  return gulp
    .src("node_modules/bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("copyJS", () => {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js"
    ])
    .pipe(gulp.dest("dist/assets/js"));
});

gulp.task("copyFonts", () => {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("dist/assets/fonts"));
});

gulp.task("copyFA", () => {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("default", ["copyBootstrap", "copyJS", "copyFonts", "copyFA"]);
