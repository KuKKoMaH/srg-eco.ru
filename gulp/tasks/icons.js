const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

gulp.task('icons', () => gulp.src('src/icons/*.svg')
  .pipe(svgSprite({
    mode:  {
      symbol: {
        inline: true,
        sprite: '../icons.svg',
      },
    },
    shape: {
      id: {
        generator: 'icon-%s',
      },
    },
    svg:   {
      namespaceIDPrefix: 'icon-',
      rootAttributes:    {
        id: 'sprites',
      },
    },
  }))
  .pipe(gulp.dest('build/icons')),
);
